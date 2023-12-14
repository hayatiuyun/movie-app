'use client';
import useSearch from '@/hook/useSearch';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import React, { useState } from 'react';
import MovieCard from '@/components/MovieCard';

const SearchPage = ({ params }) => {
  const {
    data,
    error,
    isLoading,
    page,
    setPage,
    query,
    setQuery,
    totalPages,
    totalResults,
    mutate,
  } = useSearch(params);
  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
      mutate();
    }
  };
//   px: {xs: 1.5, md: 3, lg: 6}
  return (
    <Box sx={{
        px: {xs: 1.5, md: 3, lg: 6},
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: 5,
    }}>
      <h1 className='font-semibold'>
        Search result for movie{' '}
        <span className='text-primary'>"{params.query}"</span>
      </h1>
      <Grid container gap={3}>
        {data.map((item, index) => (
          <Grid item={true} key={index} xs={11.75} sm={3.7} lg={1.5}>
            <MovieCard {...item} />
          </Grid>
        ))}
        {isLoading && (
          <Grid item xs={12}>
            <div className='flex w-full mt-4 items-center justify-center'>
              <CircularProgress />
            </div>
          </Grid>
        )}
        {page < totalPages && (
          <Grid item xs={12}>
            <div className='flex w-full my-4 items-center justify-center'>
              <Button
                variant='contained'
                color='primary'
                disabled={isLoading}
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SearchPage;
