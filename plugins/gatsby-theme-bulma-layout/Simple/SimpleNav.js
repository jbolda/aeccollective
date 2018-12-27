import React from 'react';
import MasterLayout from 'gatsby-theme-bulma-core/src/components/MasterLayout';
import SimpleTopNav from './components/SimpleTopNav';
import heartData from './assets/heart-white.svg';

class SimpleLayout extends React.Component {
  render() {
    let { sitemetadata } = this.props;

    return (
      <MasterLayout siteMetadata={sitemetadata} id="SimpleLayout">
        <SimpleTopNav
          sitemetadata={sitemetadata}
          location={this.props.location}
        />
        {this.props.children}
        <section className="footer">
          <div className="container content has-text-centered">
            <p className="copyright">
              Made with <Heart icon={heartData} alt="heart" /> by{` `}
              members from around the world.
            </p>
            <p className="copyright">
              This is a community exchange of ideas and sources, not a service
              for information.
            </p>
            <p className="copyright">
              Any and all information posted on this discord and the AEC
              Collective website that the user chooses to use either in a
              professional or personal setting is at their own risk and
              interpretation. This community or any persons in it cannot be held
              liable for any information or use therein.
            </p>
          </div>
        </section>
      </MasterLayout>
    );
  }
}

const Heart = ({ icon, alt }) => (
  <img
    src={icon}
    alt={alt}
    style={{
      height: `25px`,
      marginBottom: `-7px`
    }}
  />
);

export default SimpleLayout;
