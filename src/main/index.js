import React from 'react';
import { graphql } from 'gatsby';
import SimpleNav from '../../plugins/gatsby-theme-bulma-layout/src/components/Simple/SimpleNav';

export const frontmatter = {
  path: '/',
  layoutType: 'inset'
};

class SiteIndex extends React.Component {
  render() {
    return (
      <SimpleNav
        location={this.props.location}
      >
        <section className="hero is-secondary is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Logo icon={this.props.data.logo.publicURL} alt="Logo" />
              <h1 className="title">AEC Collective</h1>
              <h2 className="subtitle">
                Community for those in and interested in the Architecture,
                Engineering, and Construction (AEC) industry.
                <br />
                If you are involved in buildings or infrastructure, join us!
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification is-thirdary content">
                  <p>
                    The AEC Collective is a community for the Architecture,
                    Engineering, and Construction. It uses the Discord program
                    which is a free voice, video and text chat app that you can
                    access via PC, browser, or mobile phone. We look to help
                    mentor those just starting in the industry, and provide a
                    great place for networking with your peers around the world.
                    We can all benefit from understanding each related niche
                    better, but also understanding our own niche outside of our
                    geographic region.
                  </p>
                  <p>
                    You can connect to the community by clicking
                    &quot;Connect&quot; on the Discord widget below. It will
                    prompt you to create an account and download the application
                    if you so choose. We look forward to engaging with you!
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child has-text-centered">
                  <iframe
                    title="discord-widget"
                    src="https://discordapp.com/widget?id=412087578498695171&theme=dark"
                    width="350"
                    height="500"
                    allowTransparency="true"
                    frameBorder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SimpleNav>
    );
  }
}

export default SiteIndex;

const Logo = ({ icon, alt }) => (
  <img
    className="image"
    src={icon}
    alt={alt}
    style={{
      maxHeight: `150px`
    }}
  />
);

export const pageQuery = graphql`
  query SiteIndex {
    logo: file(relativePath: { eq: "logos/aecc_logo_white.svg" }) {
      publicURL
    }
  }
`;
