import React from 'react';
import { useThemeUI } from 'theme-ui';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import LogoDark from '../assets/logos/aecc_logo.svg';
import LogoLight from '../assets/logos/aecc_logo_white.svg';

export default ({ children, location }) => {
  const { colorMode } = useThemeUI();
  return (
    <Nav
      logo={{
        data: colorMode === 'light' ? LogoLight : LogoDark,
        inverse: colorMode === 'light' ? LogoDark : LogoLight,
        alt: 'Architecture Engineering and Construction Collective Logo'
      }}
      location={location}
    >
      {children}
    </Nav>
  );
};
