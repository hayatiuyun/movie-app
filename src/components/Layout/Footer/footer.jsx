import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Logo } from '../Logo';

const Footer = () => {
  return (
    <Box
      component='footer'
      data-testid="footer"
      sx={{
        backgroundColor: '#292D35',
        borderTop: 2,
        borderTopColor: 'primary.main',
        py: { xs: 4, lg: 6 },
      }}
    >
      <Container maxWidth="xl" sx={{ color: 'primary.contrastText' }}>
      <Box sx={{ width: { xs: '100%', lg: 360 }, mb: { xs: 5 } }}>
              <Logo />
            </Box>
        <Typography
        component="h6"
        data-testid="copyright"
          variant='subtitle1'
          sx={{ fontWeight: 600, color: 'text.primary', mt: 5 }}
        >
          Copyright © 2023 - Antares. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
