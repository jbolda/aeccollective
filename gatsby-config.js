module.exports = {
  siteMetadata: {
    siteTitle: `AEC Collective`,
    siteDescr: `AEC Collective`,
    siteAuthor: `members from around the world`,
    siteEmail: `me@jacobbolda.com`,
    siteTwitterUrl: 'https://twitter.com/AECCollective',
    siteTwitterPretty: '@AECCollective',
    siteDisclaimer: `<p>This is a community exchange of ideas and sources, not a service for information.</p>
      <p>Any and all information posted on this discord and the AEC Collective website that the user chooses
      to use either in a professional or personal setting is at their own risk and interpretation.
      This community or any persons in it cannot be held liable for any information or use therein.</p>`,
    navLinks: [
      {text: 'Code of Conduct', url: '/code-of-conduct/'},
      {text: 'Resources', url: '/resources/'},
      {text: 'Software', url: '/software/'}
    ],
    palette: {
      "colors": {
        "P1": "#000000",
        "P2": "#192C3B",
        "P3": "#52777D",
        "P4": "#9EBBA9",
        "P5": "#F4F4F4"
        }
      }
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-bulma-core`,
      options: { root: __dirname, palette: {
        "colors": {
          "P1": "#000000",
          "P2": "#192C3B",
          "P3": "#52777D",
          "P4": "#9EBBA9",
          "P5": "#F4F4F4"
          }
        } 
      }
    }
  ],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/src/main/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
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
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-KM7BM6N',
        includeInDevelopment: false
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      }
    }
  ]
};
