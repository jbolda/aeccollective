import React from "react"
import Link from "gatsby-link"
import SimpleNav from "../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav"

export const frontmatter = {
  path: '/',
  layoutType: 'inset'
}

class SiteIndex extends React.Component {
  render() {
    return (
      <SimpleNav sitemetadata={this.props.data.site.siteMetadata} location={this.props.location}>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                AEC Collective
              </h1>
              <h2 className="subtitle">
                Community for those in and interested in the Architecture, Engineering, and Construction (AEC) industry.<br/>
                If you are involved in buildings or infrastructure, join us!
              </h2>
            </div>
          </div>
        </section>
        <div className="level">
          <div className="level-item">
            <iframe src="https://discordapp.com/widget?id=412087578498695171&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
          </div>
        </div>
      </SimpleNav>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query SiteIndex {
    site {
      siteMetadata {
        siteTitle
        siteDescr
        siteAuthor
        siteEmail
        siteTwitterUrl
        siteTwitterPretty
      }
    }
  }
`
