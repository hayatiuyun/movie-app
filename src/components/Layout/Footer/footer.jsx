import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FooterNavigation from '@/components/Layout/Footer/footer-navigation'
import FooterSocialLinks from '@/components/Layout/Footer/footer-social-links'
// import { FooterNavigation, FooterSocialLinks } from '@/components/Layout/Footer';
import { Logo } from '../Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      component='footer'
      data-testid="footer"
      sx={{
        backgroundColor: 'primary.light',
        borderTop: 2,
        borderTopColor: 'primary.main',
        py: { xs: 4, lg: 6 },
      }}
    >
      <Container maxWidth="xl" sx={{ color: 'primary.contrastText' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={5}>
            <Box sx={{ width: { xs: '100%', lg: 360 }, mb: { xs: 5 } }}>
              <Logo size='sm' />
              <Typography
                variant='subtitle1'
                sx={{ mb: 2, mt: 1, fontWeight: 500, color: 'tertiary.light' }}
              >
                ANTARES is an Internet of Things (IoT) trademark under PT Telkom
                Indonesia Tbk. ANTARES has two core pillars, the IoT platform,
                and IoT connectivity. It is an honor for us to be in a position
                to serve you throughout the world.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
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
