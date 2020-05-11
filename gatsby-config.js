require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Joey Ng'ethe`,
    siteTitleAlt: `Joey Ng'ethe - Javascript Engineer`,
    siteHeadline: `Joey's Blog - Javascript Engineer; React, GraphQL, Node and everything in between`,
    siteUrl: `https://joeynimu.com`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    siteDescription: `Joey Ng'ethe is a Javascript Engineer from Nairobi, Kenya.`,
    author: `@africansinatra`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [],
        externalLinks: []
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joey Ng'ethe - Javascript Engineer`,
        short_name: `Joey's Blog`,
        description: `I am a Frontend/Javascript Engineer from Nairobi, Kenya. I love using React, GraphQL, Node and everything in between.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `@pauliescanlon/gatsby-mdx-embed`
  ]
};
