import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Logo = ({ onClick, variant = 'primary', size = 'md' }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...(size === 'md' && { height: '63px', width: '155px' }),
        ...(size === 'sm' && { height: '48px', width: '120px' }),
        position: 'relative',
      }}
    >
      <Image src='/logo.svg' fill={true} alt='' />
    </Box>
  );
};

export default Logo;
