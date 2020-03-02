import React from 'react';
import Img from 'gatsby-image';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import { Flex, Box, Heading, Text, Badge, Link } from 'theme-ui';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

class mdSoftwareInsetPage extends React.Component {
  render() {
    const { frontmatter } = this.props.pageContext;
    let softwareTags = frontmatter.tags;

    return (
      <Nav
        logo={{
          data: LogoData,
          inverse: LogoInverse,
          alt: 'Architecture Engineering and Construction Collective Logo'
        }}
        location={this.props.location}
      >
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
              {softwareTags.map(tag => (
                <Badge key={tag} sx={{ px: 2, m: 4 }}>
                  {tag}
                </Badge>
              ))}
            </div>
          </Box>
          <Box as={'section'}>
            <div className="container content">
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
            </div>
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
