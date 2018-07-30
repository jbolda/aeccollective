import React from "react";
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
          <div className="container content">
            {softwareTable(this.props.data.allMarkdownRemark.edges)}
          </div>
        </section>
      </SimpleNav>
    );
  }
}

export default SoftwarePage;

const softwareTable = data => (
  <table className="table is-striped is-hoverable">
    <thead>
      <tr>
        <th>Software</th>
        <th>License</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map(edge => (
        <tr>
          <th>{edge.node.frontmatter.title}</th>
          <td>{edge.node.frontmatter.professionalPricing}</td>
          <td>{edge.node.frontmatter.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

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
          html
          frontmatter {
            title
            professionalPricing
            description
          }
        }
      }
    }
  }
`;
