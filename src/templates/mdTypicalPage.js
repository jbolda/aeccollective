import React from 'react';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import { Box } from 'theme-ui';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

export default ({ children, location }) => (
  <Nav
    logo={{
      data: LogoData,
      inverse: LogoInverse,
      alt: 'Architecture Engineering and Construction Collective Logo'
    }}
    location={location}
  >
    <Box as="section" sx={{ width: '98%' }}>
      {children}
    </Box>
  </Nav>
);
