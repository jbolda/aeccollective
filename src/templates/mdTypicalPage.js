import React from 'react';
import { graphql } from 'gatsby';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

class mdInsetPage extends React.Component {
  render() {
    const { body, frontmatter } = this.props.data.markdownRemark;

    return (
      <Nav
        logo={{
          data: LogoData,
          inverse: LogoInverse,
          alt: 'Architecture Engineering and Construction Collective Logo'
        }}
        location={this.props.location}
      >
        <section className="section hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">{frontmatter.title}</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </section>
      </Nav>
    );
  }
}

export default mdInsetPage;

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
