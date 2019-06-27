module.exports = {
  siteMetadata: {
    siteTitle: `AEC Collective`,
    siteDescription: `Community for those in and interested in the Architecture, Engineering, and Construction (AEC) industry.
      If you are involved in buildings or infrastructure, join us!`,
    siteAuthor: `members from around the world`,
    siteEmail: `me@jacobbolda.com`,
    siteContact: 'https://twitter.com/AECCollective',
    siteTwitterUrl: 'https://twitter.com/AECCollective',
    siteTwitterPretty: '@AECCollective',
    siteDisclaimer: `<p>This is a community exchange of ideas and sources, not a service for information.</p>
      <p>Any and all information posted on this discord and the AEC Collective website that the user chooses
      to use either in a professional or personal setting is at their own risk and interpretation.
      This community or any persons in it cannot be held liable for any information or use therein.</p>`,
    navLinks: [
      { text: 'Code of Conduct', url: '/code-of-conduct/' },
      { text: 'Resources', url: '/resources/' },
      { text: 'Software', url: '/software/' }
    ]
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-bulma-core`,
      options: {
        root: __dirname,
        palette: {
          colors: {
            P1: '#000000',
            P2: '#25274D',
            P3: '#464866',
            P4: '#2E9CCA',
            P5: '#F4F4F4'
          }
        }
      }
    },
    {
      resolve: `gatsby-theme-bulma-layout`,
      options: {
        root: __dirname
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AEC Collective`,
        short_name: `AECC`,
        start_url: `/`,
        background_color: `#464866`,
        theme_color: `#25274D`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/logos/aecc_logo.png` // This path is relative to the root of the site.
      }
    }
  ]
};
