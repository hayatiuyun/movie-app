import { Button, Grid } from '@mui/material';
import React from 'react';
import MovieCard from '../MovieCard';
import Loading from '../LoadingComponent';
import Error from 'next/error';

const MovieList = ({
  data = [],
  isLoading,
  page,
  totalPages,
  onLoadMore,
  error,
}) => {
  if (error) return <Error statusCode={501} />;

  const handleLoadMore = () => {
    if (onLoadMore) onLoadMore();
  };

  const LoadMoreButton = () => (
    <div className='my-4 flex w-full items-center justify-center'>
      <Button
        variant='contained'
        color='primary'
        disabled={isLoading}
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    </div>
  );

  return (
    <Grid container gap={3}>
      {data.map((item, index) => (
        <Grid item={true} key={index} xs={11.75} sm={3.7} lg={1.5}>
          <MovieCard {...item} key={item.poster_path} />
        </Grid>
      ))}
      {isLoading && (
        <Grid item xs={12}>
          <Loading />
        </Grid>
      )}
      {page < totalPages && (
        <Grid item xs={12}>
          <LoadMoreButton />
        </Grid>
      )}
    </Grid>
  );
};

export default MovieList;
