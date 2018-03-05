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
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-plugin-sass`,
  ],
}
