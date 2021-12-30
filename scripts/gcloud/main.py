from google.cloud import storage
import os
import json
from bs4 import BeautifulSoup
import requests

BUCKET_NAME = os.getenv("BUCKET_NAME")
MC_NEWSLETTERS = os.getenv("MC_NEWSLETTERS")
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')

PAGE_ID =  'unswsecsoc'
LIMIT = 150

class Events():
    def _get_location(self, event):
        if 'place' not in event.keys():
            return "UNSW"
        else:
            return event.get('place').get('name', "TBD")

    def _get_cover_img(self, event):
        if 'cover' not in event.keys():
            return ""
        else:
            return event.get('cover').get('source', '')

    def get_events(self):
        fields = [
            'description',
            'start_time',
            'end_time',
            'id',
            'name',
            'place',
            'cover',
            'event_times',
            'is_canceled',
            'type',
            'posts',
        ]
        fields_query = ','.join(fields)

        print("Fetching events data from Graph API endpoint")

        res = requests.get(f'https://graph.facebook.com/{PAGE_ID}/events?limit={LIMIT}&fields={fields_query}&access_token={ACCESS_TOKEN}')
        data = res.json()
        print("Formatting events data")
        events = list(map(lambda event: {
            'id': int(event.get('id')),
            'name': event.get('name', "Event Coming Soon..."),
            'description': event.get('description', "Come along noble hack0rs!"),
            'location': self._get_location(event),
            'img': self._get_cover_img(event),
            'start': event.get('start_time', ""),
            'end': event.get('end_time', ""),
            'canceled': event['is_canceled'],
            'href': 'https://facebook.com/event/' + event['id'],
        }, data['data']))
        
        return {
            'events': events
        }

class Newsletters():
    def get_newsletters(self):
        print("Requesting newsletter data from Mailchimp URL")
        content = requests.get(MC_NEWSLETTERS)
        print("Format request data from mailchimp")
        soup = BeautifulSoup(content.text, "html.parser")
        campaigns = soup.findAll("li", {"class": "campaign"})
        newsletters = list(map(lambda x: { "title": x.text, "link": x.a['href']}, campaigns))
        return {
            "newsletters": newsletters
        }

def upload_storage(bucket, filename, data):
    blob = bucket.blob(filename)
    blob.cache_control = 'public, max-age=1800'
    blob.upload_from_string(data)

def event_handler(data, context):
    print("Pulling newsletter from mailchimp")
    newslettersAPI = Newsletters()
    newsletters_data = json.dumps(newslettersAPI.get_newsletters())

    print("Pulling events from Facebook Graph API")
    eventsAPI = Events()
    events_data = json.dumps(eventsAPI.get_events())

    print("Updating bucket")
    storage_client = storage.Client()
    bucket = storage_client.bucket(BUCKET_NAME)
    upload_storage(bucket, "events-v2.json", events_data)
    upload_storage(bucket, "newsletters-v2.json", newsletters_data)
    return "Success"
