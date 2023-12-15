'use client';
import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import { Button, Divider, IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import useDetailPage from '@/hook/useDetailPage';
import Loading from '../LoadingComponent';
import Image from 'next/image';
import Credits from './Credit';

const DetailPageComponent = ({ params, dataTestId = "detail-page-component" }) => {
  const router = useRouter();
  const { params: paramDetail, details, isLoading, error } = useDetailPage();
  const handleBack = () => {
    router.back();
  };

   if (isLoading) {
    return <Loading dataTestId={dataTestId} />;
  }

  if (!details) {
    return (
      <div data-testid={dataTestId} className='flex w-full flex-col justify-center gap-5'>
        <Image
          src='/failed-search.png'
          width={96}
          height={96}
          sizes='100vw'
          className='h-auto w-full'
        />
      </div>
    );
  }

  return (
    <div data-testid={dataTestId} className='flex w-full flex-col gap-5 overflow-hidden'>
      <div className='relative left-0 top-0 h-auto min-h-[100vh] w-full bg-tertiary-800 bg-gradient-to-b from-black to-50% md:p-4 pt-10 flex flex-col gap-8'>
        <div className='relative md:mx-auto flex w-full h-full flex-col items-center justify-center gap-5 py-5 md:flex-row md:justify-start lg:w-[85%] 3xl:w-[70%] 4xl:w-[50%] 5xl:w-[35%]'>
          <div className='inline-flex w-full items-center gap-1 md:hidden ml-4 md:ml-0'>
            <IconButton color='warning' onClick={handleBack}>
              <ChevronLeft />
            </IconButton>
            <span className='text-sm text-warning'>Back</span>
          </div>
          <div className='min-h-[420px] w-auto rounded-2xl md:w-80 flex justify-center items-center'>
            <ImageWithFallback
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original/${details.poster_path}`}
              sizes='100vw'
              className='h-auto !max-h-96 w-full rounded-2xl object-center'
              width={700}
              height={420}
            />
          </div>
          <div className='w-full flex flex-col gap-4 bg-tertiary-900 md:bg-inherit p-4'>
          <div className='hidden rounded-2xl md:block'>
            <Button
              onClick={handleBack}
              variant='outlined'
              color='warning'
              className='cursor-pointer'
              startIcon={<ChevronLeft />}
            >
              Back
            </Button>
          </div>
          <div>
          <h1 className='text-3xl font-semibold'>{details.title}</h1>
          <p>{details.release_date} • {details.spoken_languages.map(({english_name}) => english_name)}</p>
          {/* <span>{details.spoken_languages.english_name}</span> */}
          <div className='w-full inline-flex gap-2'>
            {details.genres.map(item => <span className='px-1 bg-gray-700 text-sm' key={item.id}>{item.name}</span>)}
          </div>
          </div>
          <div>
            <h3 className='font-semibold'>Overview</h3>
            <p>{details.overview}</p>
          </div>
          </div>
        </div>
        <Divider className="text-tertiary-400 bg-tertiary-400"/>
        <Credits />
      </div>
    </div>
  );
};

export default DetailPageComponent;
