import json
from flask import Flask
import requests
import os
from dotenv import load_dotenv

app = Flask(__name__)

def get_location(event):
    if 'place' not in event.keys():
        return "UNSW"
    else:
        return event.get('place').get('name', "TBD")

def get_cover_img(event):
    if 'cover' not in event.keys():
        return ""
    else:
        return event.get('cover').get('source', '')

@app.route("/events")
def events_api():
    load_dotenv()
    ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
    PAGE_ID =  'unswsecsoc'
    LIMIT = 150
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

    res = requests.get(f'https://graph.facebook.com/{PAGE_ID}/events?limit={LIMIT}&fields={fields_query}&access_token={ACCESS_TOKEN}')
    data = res.json()
    events = list(map(lambda event: {
        'id': int(event.get('id')),
        'name': event.get('name', "Event Coming Soon..."),
        'description': event.get('description', "Come along noble hack0rs!"),
        'location': get_location(event),
        'img': get_cover_img(event),
        'start': event.get('start_time', ""),
        'end': event.get('end_time', ""),
        'canceled': event['is_canceled'],
        'href': 'https://facebook.com/event/' + event['id'],
    }, res.json()['data']))
    
    print(res.json())
    print(len(res.json()))
    return json.dumps({
        'events': events
    })

if __name__ == "__main__":
    app.run(debug=True)
