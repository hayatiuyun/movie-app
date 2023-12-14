import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';
// import ChevronRight from '@public/icons/square-rounded-chevron-right-filled.svg';

const AuthNavigation = () => {
  return (
    <Box
      sx={{
        '> button': { mr: 2 },
        gap: 1,
        display: 'flex',
        flexDirection: { xs: 'row', lg: 'column', xl: 'row' },
      }}
    >
      <Button
        href={`${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/contact`}
        LinkComponent={Link}
        variant='contained'
        endIcon={
          <ChevronRight
            className='h-6 w-6 text-white'
            data-testid='mock-chevron-right'
          />
        }
      >
        Contact Sales
      </Button>
      <Button
        variant='outlined'
        href={`${process.env.NEXT_PUBLIC_URL_SIGNUP}/`}
        LinkComponent={Link}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default AuthNavigation;
