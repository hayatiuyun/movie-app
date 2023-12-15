'use client';
import useSearch from '@/hook/useSearch';
import { Box } from '@mui/material';
import React from 'react';
import MovieList from '../MovieList';

const SearchPage = ({ params }) => {
  const { data, error, isLoading, page, setPage, totalPages, mutate } =
    useSearch(params);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
      mutate();
    }
  };

  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 3, lg: 6 },
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <h1 className='font-semibold'>
        Show result for movie{' '}
        <span className='text-primary'>"{params.query}"</span>
      </h1>
      <MovieList
        data={data}
        isLoading={isLoading}
        error={error}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        onLoadMore={handleLoadMore}
      />
    </Box>
  );
};

export default SearchPage;
