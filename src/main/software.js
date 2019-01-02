import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SimpleNav from '../../plugins/gatsby-theme-bulma-layout/src/components/Simple/SimpleNav';

export const frontmatter = {
  path: '/software/',
  layoutType: 'inset'
};

class SoftwarePage extends React.Component {
  constructor(props) {
    super();
    this.state = pullUnique(props.data.allMarkdownRemark.edges);
  }

  disciplineClicked(index) {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.disciplineButtons[
        prevState.uniqueDisciplines[index]
      ] = !prevState.disciplineButtons[prevState.uniqueDisciplines[index]];

      let filterData = edge => {
        let availableDisciplines = edge.node.frontmatter.discipline.reduce(
          (accumulator, discipline) => {
            accumulator[discipline] = true;
            return accumulator;
          },
          {}
        );
        let disciplines = prevState.uniqueDisciplines;
        return disciplines.reduce((accumulator, discipline) => {
          if (
            newState.disciplineButtons[discipline] &&
            !availableDisciplines[discipline]
          ) {
            return false;
          } else {
            return accumulator;
          }
        }, true);
      };

      newState.filteredData = [
        ...props.data.allMarkdownRemark.edges.filter(filterData)
      ];

      return newState;
    });
  }

  render() {
    return (
      <SimpleNav
        sitemetadata={this.props.data.site.siteMetadata}
        location={this.props.location}
      >
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">AEC Industry Software</h1>
          </div>
          <div className="container content">
            <p>
              We have created and are continually growing a list of software
              used within the industry. If we are missing any software that you
              use within the Architecture, Engineering and Construction
              industries, let us know! We would love to have you join and tell
              us in the community by clicking the{' '}
              <Link to={'/'}>join button on the widget on the homepage</Link>.
              Otherwise feel free to reach out via email at{' '}
              <a href="mailto:hello@aeccollective.com">
                hello@aeccollective.com
              </a>
              .
            </p>
          </div>
          <div className="container content">
            <p>Filter by Discipline. Click on the following buttons.</p>
            <div className="buttons">
              {this.state.uniqueDisciplines.map((discipline, index) => (
                <div
                  key={index}
                  className={
                    this.state.disciplineButtons[discipline]
                      ? `button is-info`
                      : `button`
                  }
                  onClick={this.disciplineClicked.bind(this, index)}
                >
                  {discipline}
                </div>
              ))}
            </div>
            <div>{`We are showing ${
              this.state.filteredData.length
            } software titles matching your criteria.`}</div>
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
    {data.length === 0 ? (
      <span>No matching software.</span>
    ) : (
      data.map(edge => (
        <div>
          <div className="columns" key={edge.node.id}>
            <div className="column is-one-quarter">
              <a
                href={edge.node.frontmatter.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{edge.node.frontmatter.title}</strong>
                {logoImage(edge.node.frontmatter)}
              </a>
            </div>
            <div className="column">
              <div className="content">
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
                  <div className="tags">
                    {edge.node.frontmatter.tags.map(tag => (
                      <span key={tag} className="tag is-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Link to={edge.node.frontmatter.path}>
                      <button className="button is-info">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))
    )}
  </div>
);

const logoImage = frontmatter => {
  if (frontmatter.logo.name === 'placeholder') {
    return (
      <Img
        sizes={frontmatter.logo.childImageSharp.sizes}
        style={{ maxWidth: 200, width: 200, height: 0 }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else if (frontmatter.logo.childImageSharp) {
    return (
      <Img
        sizes={frontmatter.logo.childImageSharp.sizes}
        style={{ maxWidth: 200, width: 200 }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else if (frontmatter.logo.publicURL) {
    return (
      <div className="image">
        <img
          src={frontmatter.logo.publicURL}
          style={{ maxWidth: 200, width: 200 }}
          alt={`${frontmatter.title} logo`}
        />
      </div>
    );
  } else {
    return null;
  }
};

const pullUnique = dataArray => {
  let uniqueDisciplines = { disciplineButtons: {} };
  dataArray.forEach(data => {
    data.node.frontmatter.discipline.forEach(discipline => {
      uniqueDisciplines.disciplineButtons[discipline] = false;
    });
  });
  return {
    uniqueDisciplines: Object.keys(uniqueDisciplines.disciplineButtons),
    filteredData: dataArray,
    ...uniqueDisciplines
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
            tags
            professionalPricing
            description
            website
            logo {
              name
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
