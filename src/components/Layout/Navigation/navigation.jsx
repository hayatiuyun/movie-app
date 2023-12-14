"use client";
import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navigation.data';
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);
  // const router = useRouter();
  const pathname = usePathname()

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
      {navigations.map(({ path: destination, label, subpath, cols }) => (
        <Box
          key={label}
          className='group'
          sx={{
            position: 'relative',
            color: 'text.primary',
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
            }),
            '&:hover': {
              color: 'primary.main', // Change text color to primary on hover
            },
          }}
        >
          <Link
            href={destination}
            tabIndex={0}
            onMouseOver={() => toggleDropdown(label)}
            className={`flex  cursor-pointer items-center justify-start gap-1 ${
              activeDropdown === label && 'text-primary'
            }`}
          >
            {label}
            {subpath && (
              <KeyboardArrowDownRounded
                className={`ml-1.5 block text-inherit transition delay-150 duration-300 ease-in-out group-hover:rotate-180 lg:hidden`}
              />
            )}
          </Link>
          {subpath && activeDropdown === label && (
            <div
              ref={dropdownRef}
              onMouseLeave={() => setActiveDropdown(null)}
              onClick={() => setActiveDropdown(null)}
              className={`grid grid-cols-1 lg:absolute ${cols} z-50 left-[-100%] top-[150%] mt-2 gap-4 space-y-2  whitespace-nowrap rounded-xl py-2 text-lg text-tertiary-400 transition-all duration-300 ease-in-out lg:border lg:border-tertiary-50 lg:bg-white lg:p-4 lg:text-base lg:text-tertiary-500 lg:shadow-lg xl:-left-40`}
            >
              {subpath.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className='inline-flex items-center gap-4 bg-white transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-tertiary-50 hover:text-tertiary-700 lg:w-min lg:py-1.5 xl:w-full xl:px-4'
                >
                  <Image src={item.img} width={56} height={56} alt={item.desc} />
                  <div className='flex flex-col gap-1 lg:w-3/4 xl:w-full'>
                    <h6 className='font-semibold text-black'>{item.label}</h6>
                    <div className='flex'>
                      <span className='truncate text-sm text-tertiary-400 '>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
