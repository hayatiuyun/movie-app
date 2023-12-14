import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';
import SearchButton from './SearchButton';
// import ChevronRight from '@public/icons/square-rounded-chevron-right-filled.svg';

const SearchBar = () => {
  return (
    <Box
    >
      <SearchButton />
    </Box>
  );
};

export default SearchBar;
