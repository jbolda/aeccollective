import React from 'react';
import Nav from '../components/nav';
import { Box } from 'theme-ui';

export default ({ children, location }) => (
  <Nav location={location}>
    <Box
      as="section"
      sx={{ width: ['95%', '85%', '60%'], mx: ['2.5%', '7.5%', '20%'] }}
    >
      {children}
    </Box>
  </Nav>
);
