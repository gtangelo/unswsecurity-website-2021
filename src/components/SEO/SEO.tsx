import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOStaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      keywords: string;
    };
  };
}

const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
      }
    }
  }
`;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const { site } = useStaticQuery<SEOStaticQueryProps>(SEOStaticQuery);
  const { siteMetadata } = site;
  const { pathname } = useLocation();

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    titleTemplate: title ? `%s | ${siteMetadata.title}` : `${siteMetadata.title}`,
    keywords: keywords || siteMetadata.keywords,
    url: `${siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
    </Helmet>
  );
};

export default SEO;
