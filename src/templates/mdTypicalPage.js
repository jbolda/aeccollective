import React from 'react';
import { graphql } from 'gatsby';
import SimpleNav from 'gatsby-theme-bulma-layout/src/Simple/SimpleNav.js';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

class mdInsetPage extends React.Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark;

    return (
      <SimpleNav
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </SimpleNav>
    );
  }
}

export default mdInsetPage;

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
