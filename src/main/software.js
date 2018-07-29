import React from "react";
import Link from "gatsby-link";
import SimpleNav from "../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav";

export const frontmatter = {
  path: "/software/",
  layoutType: "inset"
};

class SoftwarePage extends React.Component {
  render() {
    console.log(this);
    return (
      <SimpleNav
        sitemetadata={this.props.data.site.siteMetadata}
        location={this.props.location}
      >
        <section className="section">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">title</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">text</div>
        </section>
      </SimpleNav>
    );
  }
}

export default SoftwarePage;

export const pageQuery = graphql`
  query SoftwarePage {
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
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "mdSoftware" } } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;
