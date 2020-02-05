import React from 'react';
import { graphql } from 'gatsby';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import { Flex, Box, Heading, Text } from 'theme-ui';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

class SiteIndex extends React.Component {
  render() {
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
          as="section"
          sx={{
            flexWrap: 'wrap',
            minHeight: '80vh',
            width: ['95%', '75%', '30%'],
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginX: ['2.5%', '12.5%', '35%']
          }}
        >
          <Logo icon={this.props.data.logo.publicURL} alt="Logo" />
          <Heading as="h1">AEC Collective</Heading>
          <Heading as="h2">
            Community for those in and interested in the Architecture,
            Engineering, and Construction (AEC) industry.
          </Heading>
          <Text as="p">
            If you are involved in buildings or infrastructure, join us!
          </Text>
        </Flex>
        <Flex
          as="section"
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            textAlign: 'center'
          }}
        >
          <Box sx={{ width: ['95%', '60%', '40%'], padding: 11 }}>
            <Text as="p">
              The AEC Collective is a community for the Architecture,
              Engineering, and Construction. It uses the Discord program which
              is a free voice, video and text chat app that you can access via
              PC, browser, or mobile phone. We look to help mentor those just
              starting in the industry, and provide a great place for networking
              with your peers around the world. We can all benefit from
              understanding each related niche better, but also understanding
              our own niche outside of our geographic region.
            </Text>
            <Text as="p">
              You can connect to the community by clicking &quot;Connect&quot;
              on the Discord widget below. It will prompt you to create an
              account and download the application if you so choose. We look
              forward to engaging with you!
            </Text>
          </Box>
          <Box sx={{ width: ['95%', '60%', '30%'], margin: [0, 11, 11] }}>
            <iframe
              title="discord-widget"
              src="https://discordapp.com/widget?id=412087578498695171&theme=dark"
              width="100%"
              height="500px"
              allowtransparency="true"
              frameBorder="0"
            />
          </Box>
        </Flex>
      </Nav>
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
