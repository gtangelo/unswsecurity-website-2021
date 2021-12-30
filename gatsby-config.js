'use strict'
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'UNSW Security Society',
    description: 'Key part of the security community within UNSW.',
    keywords: 'secsoc, unswsecurity, security, unsw, unswsecuritysociety, securitysociety, society',
    siteUrl: 'https://unswsecurity.com',
    author: {
      name: 'UNSw Security Projects Team',
      email: 'projects@unswsecurity.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-theme-material-ui`,
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-remark`
  ]
};
