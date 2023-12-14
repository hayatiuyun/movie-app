"use client";
import React from 'react';
import Box from '@mui/material/Box';
import { navigations } from './navigation.data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  // const router = useRouter();
  const pathname = usePathname()


  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
      {navigations.map(({ path: destination, label, subpath, cols }) => (
        <Box
          key={label}
          className='group hover:text-tertiary-300'
          sx={{
            position: 'relative',
            color: 'text.secondary',
            cursor: 'pointer',
            fontWeight: 500,
            display: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 2, lg: 1.5, xl: 2 },
            mb: { xs: 4, lg: 0 },
            fontSize: { xs: '1.75rem', lg: '1rem' },
            transition: 'color 0.3s', // Add transition for color change
            ...(destination === pathname && {
              color: 'primary.main',
              fontWeight: 600,
              '&:hover': {
                color: "primary.main"
              }
            }),
          }}
        >
          <Link
            href={destination}
            tabIndex={0}
            className={`flex cursor-pointer text-inherit items-center justify-start gap-1`}
          >
            {label}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
