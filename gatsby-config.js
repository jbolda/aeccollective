module.exports = {
  siteMetadata: {
    siteTitle: `AEC Collective`,
    siteDescr: `AEC Collective`,
    siteAuthor: `Jacob Bolda`,
    siteEmail: `me@jacobbolda.com`,
    siteTwitterUrl: "https://twitter.com/jacob_bolda",
    siteTwitterPretty: "@jacob_bolda",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/src/main/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/src/main/software/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`
            }
          }
        ]
      }
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
  ],
}
