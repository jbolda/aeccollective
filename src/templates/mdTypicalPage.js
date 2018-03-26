import React from "react"
import SimpleNav from "../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav"

class mdInsetPage extends React.Component {
  render() {
    const {html, frontmatter} = this.props.data.markdownRemark

    return (
      <SimpleNav sitemetadata={this.props.data.site.siteMetadata} location={this.props.location}>
        <section className="section hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                {frontmatter.title}
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </SimpleNav>
    )
  }
}

export default mdInsetPage

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
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
