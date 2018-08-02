import React from 'react';
import Img from 'gatsby-image';
import SimpleNav from '../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav';

class mdSoftwareInsetPage extends React.Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark;
    var softwareTags = frontmatter.tags;
    return (
      <SimpleNav
        sitemetadata={this.props.data.site.siteMetadata}
        location={this.props.location}
      >
        <section className="section hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">{frontmatter.title}</h1>
              <Img
                sizes={frontmatter.logo.childImageSharp.sizes}
                style={{ maxWidth: 600, maxHeight: 300 }}
              />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">{frontmatter.description}</div>
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
            <table>
              <tr>
                <td>User forums:</td>
                <td>
                  <a href={frontmatter.userForums.link}>
                    {frontmatter.userForums.text}
                  </a>{' '}
                </td>
              </tr>
              <tr>
                <td>Technical Support:</td>
                <td>
                  <a href={frontmatter.userSupport.link}>
                    {frontmatter.userSupport.text}
                  </a>{' '}
                </td>
              </tr>
              <tr>
                <td>Tutorials:</td>
                <td>
                  <a href={frontmatter.tutorials.link}>
                    {frontmatter.tutorials.text}
                  </a>{' '}
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3 className="pricing">PRICING</h3>
            <table>
              <tr>
                <td>Student:</td>
                <td>{frontmatter.studentPricing}</td>
              </tr>
              <tr>
                <td>Professional:</td>
                <td>{frontmatter.professionalPricing}</td>
              </tr>
            </table>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3>PROJECTS</h3>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h3>OTHER NOTES</h3>
          </div>
        </section>
      </SimpleNav>
    );
  }
}

export default mdSoftwareInsetPage;

export const pageQuery = graphql`
  query markdownTemplateBySoftware($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        logo {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        userForums {
          text
          link
        }
        userSupport {
          text
          link
        }
        tutorials {
          text
          link
        }
        studentPricing
        professionalPricing
        description
        projects
        otherNotes
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
`;
