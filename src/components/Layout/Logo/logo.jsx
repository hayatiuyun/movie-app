import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Logo = ({ onClick, variant = 'primary', size = 'md' }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...(size === 'md' && { height: {xs: "36px", md: '48px'}, width: {xs: "19.73px", md: '119.11px'} }),
        ...(size === 'sm' && { height: '48px', width: '120px' }),
        position: 'relative',
        zIndex: "appBar"
      }}
    >
      <Image src='/logo.svg' fill={true} alt='' className='hidden md:block' />
      <Image src='/netflix-logo-mobile.png' fill={true} alt='' className='block md:hidden' />

    </Box>
  );
};

export default Logo;
