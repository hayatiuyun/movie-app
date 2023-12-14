'use client';
import { Box, Button, Divider, ButtonGroup } from '@mui/material';
import SearchButton from '../Layout/Navigation/SearchBar/SearchButton';
import MovieButtonGroup from '../ButtonGroupComponent';

export default function MainPage() {
    const categories = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];
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
        <div className="bg-[url('/bg-hero.png')] bg-cover bg-bottom bg-blend-darken min-h-[40vh] h-full flex flex-col justify-end gap-5 px-10 pt-4">
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl font-extrabold w-min px-2 bg-white text-tertiary-900'>Welcome<span className='text-primary text-5xl'>.</span></h1>
                <p className='text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <SearchButton big />
        </div>
        <Divider className="text-tertiary-400 bg-tertiary-400"/>
        <MovieButtonGroup categories={categories} variant='contained' sx={{gap: 2}}>
            <Button className='m-4 !rounded-xl'>Now Playing</Button>
            <Button className='m-4 !rounded-xl'>Upcoming</Button>
            <Button className='m-4 !rounded-xl'>Now Playing</Button>
            <Button className='m-4 !rounded-xl'>Upcoming</Button>
        </MovieButtonGroup>
    </Box>
  );
}
