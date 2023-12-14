// components/SearchBar.js
'use client';
import { useState } from 'react';
import { Input, IconButton, Paper, Collapse } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { mutate } from 'swr';

const SearchButton = ({ big = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const router = useRouter();

  const handleExpandToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      console.log('ENNN');
      mutate();
      router.push(`search?query=${query}`);
    }

    if (e.key === 'Escape') {
      handleExpandToggle();
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Collapse
      orientation='horizontal'
      in={expanded}
      collapsedSize={big ? '100%' : 36}
      timeout={700}
      sx={{
        '.MuiCollapse-wrapperInner': {
          width: '100%',
        },
      }}
    >
      <Paper
        sx={{
          borderRadius: 4,
        }}
        className={` ${
          big
            ? 'flex w-full flex-row-reverse !bg-tertiary-800 pr-4'
            : 'inline-flex w-60 !bg-transparent'
        } p-2`}
      >
        <IconButton
          onClick={handleExpandToggle}
          color={big ? 'error' : 'white'}
        >
          <SearchIcon />
        </IconButton>
        <Input
          placeholder='Search Movie, Tv, or person.....'
          fullWidth
          autoFocus={expanded}
          color='primary'
          onChange={handleChange}
          sx={{
            color: 'white !important',
          }}
          onKeyDown={handleKey}
          onBlur={() => setExpanded(false)}
        />
      </Paper>
    </Collapse>
  );
};

export default SearchButton;
