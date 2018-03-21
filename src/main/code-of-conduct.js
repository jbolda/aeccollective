import React from "react"
import Link from "gatsby-link"
import SimpleNav from "../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav"

export const frontmatter = {
  path: '/code-of-conduct/',
  layoutType: 'inset'
}

class CodeOfConduct extends React.Component {
  render() {
    return (
      <SimpleNav sitemetadata={this.props.data.site.siteMetadata} location={this.props.location}>
        <section className="section hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                AEC Collective Code of Conduct
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <h2 id="our-pledge">Our Pledge</h2>

            <p>In the interest of fostering an open and welcoming environment, we as
            contributors and maintainers pledge to making participation in our project and
            our community a harassment-free experience for everyone, regardless of age, body
            size, disability, ethnicity, gender identity and expression, level of experience,
            education, socio-economic status, nationality, personal appearance, race,
            religion, or sexual identity and orientation.</p>

            <h2 id="our-standards">Our Standards</h2>

            <p>Examples of behavior that contributes to creating a positive environment
            include:</p>

            <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
            </ul>

            <p>Examples of unacceptable behavior by participants include:</p>

            <ul>
            <li>The use of sexualized language or imagery and unwelcome sexual attention or
            advances</li>
            <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
            <li>Public or private harassment</li>
            <li>Publishing others’ private information, such as a physical or electronic
            address, without explicit permission</li>
            <li>Other conduct which could reasonably be considered inappropriate in a
            professional setting</li>
            </ul>

            <h2 id="our-responsibilities">Our Responsibilities</h2>

            <p>Community maintainers are responsible for clarifying the standards of acceptable
            behavior and are expected to take appropriate and fair corrective action in
            response to any instances of unacceptable behavior.</p>

            <p>Community maintainers have the right and responsibility to remove, edit, or
            reject comments, commits, code, wiki edits, issues, and other contributions
            that are not aligned to this Code of Conduct, or to ban temporarily or
            permanently any contributor for other behaviors that they deem inappropriate,
            threatening, offensive, or harmful.</p>

            <h2 id="enforcement">Enforcement</h2>

            <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be
            reported by contacting the community team at <a href="mailto:hello@aeccollective.com">hello@aeccollective.com</a>. All
            complaints will be reviewed and investigated and will result in a response that
            is deemed necessary and appropriate to the circumstances. The community team is
            obligated to maintain confidentiality with regard to the reporter of an incident.
            Further details of specific enforcement policies may be posted separately.</p>

            <p>Community maintainers who do not follow or enforce the Code of Conduct in good
            faith may face temporary or permanent repercussions as determined by other
            members of the community's leadership.</p>

            <h2 id="attribution">Attribution</h2>

            <p>This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org">Contributor Covenant</a>, version 1.4,
            available at <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</a></p>
          </div>
        </section>
      </SimpleNav>
    )
  }
}

export default CodeOfConduct

export const pageQuery = graphql`
  query CodeOfConduct {
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
`
