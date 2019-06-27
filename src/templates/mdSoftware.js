import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SimpleNav from 'gatsby-theme-bulma-layout/src/Simple/SimpleNav.js';

class mdSoftwareInsetPage extends React.Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark;
    let softwareTags = frontmatter.tags;

    return (
      <SimpleNav
        logo={{data: LogoData, inverse: LogoInverse, alt: 'Architecture Engineering and Construction Collective Logo'}}
        location={this.props.location}
      >
        <section className="hero is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{frontmatter.title}</h1>
              {logoImage(frontmatter)}
            </div>
          </div>
        </section>
        <section className="section">
          <div
            className="container content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        <section className="section">
          <div className="container content">
            <h3 className="specialties">SPECIALTIES</h3>
            <div className="tags">
              {softwareTags.map(tag => (
                <span className="tag is-medium" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3 className="userSupport">USER SUPPORT</h3>
            <p>
              <a href={frontmatter.website}>Main Website</a>
            </p>
            {frontmatter.officialLinks.map(lk => {
              if (lk.name === '') {
                return null;
              } else {
                return (
                  <p key={lk.name}>
                    <a href={lk.link}>{lk.name}</a>
                  </p>
                );
              }
            })}
            {frontmatter.tutorials.map(lk => {
              if (lk.name === '') {
                return null;
              } else {
                return (
                  <p key={lk.name}>
                    <a href={lk.link}>{lk.name}</a>
                  </p>
                );
              }
            })}
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3 className="pricing">PRICING</h3>
            <table>
              <tbody>
                <tr>
                  <td>Student:</td>
                  <td>{frontmatter.studentPricing}</td>
                </tr>
                <tr>
                  <td>Professional:</td>
                  <td>{frontmatter.professionalPricing}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* <section className="section">
          <div className="container content">
            <h3>PROJECTS</h3>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3>OTHER NOTES</h3>
          </div>
        </section> */}
      </SimpleNav>
    );
  }
}

export default mdSoftwareInsetPage;

const logoImage = frontmatter => {
  if (frontmatter.logo.name === 'placeholder') {
    return null;
  } else if (frontmatter.logo.childImageSharp) {
    return (
      <Img
        sizes={frontmatter.logo.childImageSharp.sizes}
        style={{ maxHeight: 300, maxWidth: 600 }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else if (frontmatter.logo.publicURL) {
    return (
      <div className="image">
        <img
          src={frontmatter.logo.publicURL}
          style={{ maxHeight: 300 }}
          alt={`${frontmatter.title} logo`}
        />
      </div>
    );
  } else {
    return null;
  }
};

export const pageQuery = graphql`
  query markdownTemplateBySoftware($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        logo {
          name
          publicURL
          childImageSharp {
            sizes(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        website
        officialLinks {
          name
          link
        }
        tutorials {
          name
          link
        }
        studentPricing
        professionalPricing
        description
      }
    }
  }
`;
