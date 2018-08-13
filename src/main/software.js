import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import SimpleNav from '../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav';

export const frontmatter = {
  path: '/software/',
  layoutType: 'inset'
};

class SoftwarePage extends React.Component {
  constructor(props) {
    super();
    this.state = pullUniqueTags(props.data.allMarkdownRemark.edges);
  }

  tagClicked(index) {
    let newState = {};
    newState[this.state.uniqueTags[index]] = !this.state[
      this.state.uniqueTags[index]
    ];
    let filterData = edge => {
      let disciplines = edge.node.frontmatter.discipline;
      return disciplines.reduce((accumulator, discipline) => {
        if (accumulator) {
          return true;
        } else if (newState[discipline]) {
          return true;
        }
      }, false);
    };
    let newFilteredData = this.props.data.allMarkdownRemark.edges.filter(
      filterData
    );
    newState.filteredData =
      newFilteredData.length === 0
        ? this.props.data.allMarkdownRemark.edges
        : newFilteredData;
    this.setState(newState);
  }

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
            Below are a few examples of software used in the industry. If you
            have any that we need to add, let us know!
          </div>
          <div className="container content">
            <p>Filter by Discipline. Click on the following buttons.</p>
            {this.state.uniqueTags.map((tag, index) => (
              <div
                key={index}
                className={this.state[tag] ? `button is-info` : `button`}
                onClick={this.tagClicked.bind(this, index)}
              >
                {tag}
              </div>
            ))}
            <hr />
          </div>
          <div className="container content">
            {softwareTable(this.state.filteredData)}
          </div>
        </section>
      </SimpleNav>
    );
  }
}

export default SoftwarePage;

const softwareTable = data => (
  <div>
    {data.map(edge => (
      <div className="media" key={edge.node.id}>
        <div className="media-left">
          <a href={edge.node.frontmatter.website} target="_blank">
            <strong>{edge.node.frontmatter.title}</strong>
            {edge.node.frontmatter.logo.childImageSharp ? (
              <Img
                className="image"
                sizes={edge.node.frontmatter.logo.childImageSharp.sizes}
                style={{ maxWidth: 200, width: 200 }}
              />
            ) : (
              <div className="image">
                <img
                  src={edge.node.frontmatter.logo.publicURL}
                  style={{ maxWidth: 200, width: 200 }}
                />
              </div>
            )}
          </a>
        </div>
        <div className="media-content">
          <p>
            <strong>{'Discipline: '}</strong>
            {edge.node.frontmatter.discipline.map((disc, index) => {
              if (index === 0) {
                return <span key={index}>{disc}</span>;
              } else {
                return <span key={index}>, {disc}</span>;
              }
            })}
          </p>
          <p>
            <strong>{'Pricing: '}</strong>
            {edge.node.frontmatter.professionalPricing}
          </p>
          <div>
            <p>{edge.node.frontmatter.description}</p>
            <Link to={edge.node.frontmatter.path}>
              <button className="button is-info">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const pullUniqueTags = dataArray => {
  let uniqueTags = {};
  dataArray.forEach(data => {
    data.node.frontmatter.discipline.forEach(tag => {
      uniqueTags[tag] = false;
    });
  });
  return {
    uniqueTags: Object.keys(uniqueTags),
    filteredData: dataArray,
    ...uniqueTags
  };
};

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
          frontmatter {
            path
            title
            discipline
            professionalPricing
            description
            website
            logo {
              publicURL
              childImageSharp {
                sizes(maxWidth: 200) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
