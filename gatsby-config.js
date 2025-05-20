require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Joe Ng'ethe`,
    siteTitleAlt: `Joe Ng'ethe - Javascript Engineer`,
    siteHeadline: `Joe's Blog - Javascript Engineer; React, GraphQL, Node and everything in between`,
    siteUrl: `https://joeynimu.com`,
    siteLanguage: `en`,
    siteKeywords:
      "Joe Ng'ethe, Joe Ngethe, Joey Ng'ethe, Joey Ngethe, Joey, Ngethe, Ng'ethe, Frontend Engineer in Kenya, Frontend Engineer, Software Engineer, Engineers in Kenya, Nairobi Software Engineers, Graphql, React, Gatsby, Nextjs, Prismajs, javascript, frontend, css, UX engineers, Nairobi Graphql",
    siteImage: `/joey.jpg`,
    siteDescription: `Joe Ng'ethe is a Javascript Engineer from Nairobi, Kenya.`,
    author: `@africansinatra`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [],
        externalLinks: [],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joe Ng'ethe - Javascript Engineer`,
        short_name: `Joe's Blog`,
        description: `I am a Frontend/Javascript Engineer from Nairobi, Kenya. I love using React, GraphQL, Node and everything in between.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `@pauliescanlon/gatsby-mdx-embed`,
  ],
};
