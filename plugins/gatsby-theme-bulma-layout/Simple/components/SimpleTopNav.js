import React from "react";
import Link from "gatsby-link";
import styles from "../palette.json";

class SimpleTopNav extends React.Component {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            style={this.props.location.pathname == '/' ? {backgroundColor: styles.colors.P5} : {}}
            >
            <span
              className="title"
              style={this.props.location.pathname == '/' ? {color: styles.colors.P2} : {color: styles.colors.P5}}
              >
              AECC
            </span>
          </Link>
          <Link
            to="/code-of-conduct/"
            className="navbar-item"
            style={this.props.location.pathname == '/code-of-conduct/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
            >
            Code of Conduct
          </Link>
          <Link
            to="/resources/"
            className="navbar-item"
            style={this.props.location.pathname == '/resources/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
            >
            Resources
          </Link>
          <Link
            to="/software/"
            className="navbar-item"
            style={this.props.location.pathname == '/software/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
            >
            Resources
          </Link>
        </div>
      </nav>
    )
  }
}

export default SimpleTopNav;
