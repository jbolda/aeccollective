import React from 'react';
import Helmet from 'react-helmet';
import './css/base.scss';

class MasterLayout extends React.Component {
  render() {
    let { sitemetadata } = this.props;

    return (
      <div className="MasterLayout is-light">
        <Helmet
          defaultTitle={sitemetadata.siteTitle}
          title={sitemetadata.siteTitle}
          meta={[
            { name: `description`, content: sitemetadata.siteDescr },
            { name: `keywords`, content: `community` }
          ]}
        >
          <html className="has-navbar-fixed-top" lang="en" />
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default MasterLayout;
