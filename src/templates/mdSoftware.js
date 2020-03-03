import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Nav from '../components/nav';
import { Flex, Box, Heading, Text, Badge, Link } from 'theme-ui';

class mdSoftwareInsetPage extends React.Component {
  render() {
    const { frontmatter } = this.props.data.mdx;
    return (
      <Nav location={this.props.location}>
        <Flex
          sx={{
            width: ['95%', '85%', '60%'],
            mx: ['2.5%', '7.5%', '20%'],
            flexDirection: 'column'
          }}
        >
          <Box as={'section'}>
            <Heading as="h1">{frontmatter.title}</Heading>
            {logoImage(frontmatter)}
          </Box>
          <Box>{this.props.children}</Box>
          <Box as={'section'}>
            <Heading as="h3" className="specialties">
              SPECIALTIES
            </Heading>
            <div className="tags">
              {frontmatter?.tags.map(tag => (
                <Badge key={tag} sx={{ px: 2, m: 4 }}>
                  {tag}
                </Badge>
              ))}
            </div>
          </Box>
          <Box as={'section'}>
            <Flex sx={{ flexDirection: 'column' }}>
              <Heading as="h3" className="userSupport">
                USER SUPPORT
              </Heading>
              <Link href={frontmatter.website}>Main Website</Link>
              {frontmatter.officialLinks.map(lk => {
                if (lk.name === '') {
                  return null;
                } else {
                  return (
                    <Link key={lk.name} href={lk.link}>
                      {lk.name}
                    </Link>
                  );
                }
              })}
              {frontmatter.tutorials.map(lk => {
                if (lk.name === '') {
                  return null;
                } else {
                  return (
                    <Link key={lk.name} href={lk.link}>
                      {lk.name}
                    </Link>
                  );
                }
              })}
            </Flex>
          </Box>
          <Box as={'section'}>
            <Heading as="h3" className="pricing">
              PRICING
            </Heading>
            <Text>{`Student: ${frontmatter.studentPricing}`}</Text>
            <Text>{`Professional: ${frontmatter.professionalPricing}`}</Text>
          </Box>
        </Flex>
      </Nav>
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
  query markdownTemplateBySoftware($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
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
