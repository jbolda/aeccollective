import React from 'react';
import Link from 'gatsby-link';
import SimpleNav from '../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav';

export const frontmatter = {
  path: '/software/',
  layoutType: 'inset'
};

class SoftwarePage extends React.Component {
  render() {
    return (
      <SimpleNav
        sitemetadata={this.props.data.site.siteMetadata}
        location={this.props.location}
      >
        <section className="section">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">AEC Industry Software</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            Below are a few examples of software used in the industry. If you have any that we need to add, let us know!
          </div>
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
        <th>Discipline</th>
        <th>License</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map(edge => (
        <tr>
          <th>
            <a href={edge.node.frontmatter.website} target="_blank">
              {edge.node.frontmatter.title}
            </a>
          </th>
          <td>
            {edge.node.frontmatter.discipline.map((disc, index) => {
              if (index === 0) {
                return <span>{disc}</span>;
              } else {
                return <span>, {disc}</span>;
              }
            })}
          </td>
          <td>{edge.node.frontmatter.professionalPricing}</td>
          <td>
            <p>{edge.node.frontmatter.description}</p>
            <Link to={edge.node.frontmatter.path}>
              <button className="button is-info">Learn More</button>
            </Link>
          </td>
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
            path
            title
            discipline
            professionalPricing
            description
            website
          }
        }
      }
    }
  }
`;
