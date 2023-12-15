'use client';
import { Box, Button, Divider, ButtonGroup } from '@mui/material';
import SearchButton from '../Layout/Navigation/SearchBar/SearchButton';
import useListMovie from '@/hook/useListMovie';
import MovieList from '../MovieList';
import Dropdown from '../DropdownFilter';
import Loading from '../LoadingComponent';
import { SearchOffTwoTone } from '@mui/icons-material';

export default function MainPage() {
  const categories = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const {
    data,
    isLoading,
    handleChangeValue,
    error,
    page,
    setPage,
    value,
    totalPages,
    mutate,
  } = useListMovie();

  const handleLoadMore = () => {
    console.log('page', page);
    if (page < totalPages) {
      setPage((pg) => pg + 1);
      setTimeout(() => {
        mutate();
      }, 500);
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
      <div className="flex h-full min-h-[40vh] flex-col justify-end gap-5 bg-[url('/bg-hero.png')] bg-cover bg-bottom px-10 pt-4 bg-blend-darken">
        <div className='flex flex-col gap-5'>
          <h1 className='w-min bg-white px-2 text-4xl font-extrabold text-tertiary-900'>
            Welcome<span className='text-5xl text-primary'>.</span>
          </h1>
          <p className='text-2xl'>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <SearchButton big />
      </div>
      <Divider className='bg-tertiary-400 text-tertiary-400' />
      <div
        data-testid='movie-list'
        className='flex flex-row items-center justify-between lg:justify-end'
      >
        <h4 className='mr-5 text-lg text-tertiary-400'>Filter by | </h4>

        <Dropdown
          className='cursor-pointer'
          value={value}
          categories={categories}
          handleChangeValue={handleChangeValue}
        />
      </div>
      {isLoading && !data.length && (
        <div className='flex w-full items-center justify-center'>
          <div className='mx-auto flex w-full flex-col items-center justify-center'>
            <SearchOffTwoTone className='!h-auto !w-[15vw] text-tertiary-600' />
            <h3 className='text-tertiary-500'>We're working on it</h3>
          </div>
        </div>
      )}
      {(isLoading && totalPages > 1) || data.length ? (
        // Check if data exists and is not empty before rendering MovieList
        <MovieList
          data={data}
          isLoading={isLoading}
          page={page}
          totalPages={totalPages}
          onLoadMore={handleLoadMore}
          error={error}
        />
      ) : (
        <div className='flex w-full items-center justify-center'>
          <Loading />
        </div>
      )}
    </Box>
  );
}
