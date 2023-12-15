'use client';
import useCredit from '@/hook/useCredit';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Divider } from '@mui/material';

const Credits = () => {
  const { cast, crew, error, isLoading, mutate } = useCredit();

  return (
    <div className='flex w-full flex-col gap-5 pb-8'>
      <h3 className='text-3xl font-semibold'>Cast</h3>
      <Splide
        aria-label='Cast Area'
        options={{
          fixedWidth: 200,
          autoplay: true,
          gap: 4,
          rewind: true,
          pagination: false,
          classes: {
            arrows: 'splide__arrows mr-4',
          },
        }}
      >
        {cast.map((item, index) => (
          <SplideSlide key={index}>
            <div className='flex flex-col items-center justify-center'>
              <div className='aspect-square overflow-clip h-40 w-40 rounded-full bg-tertiary-400'>
                <ImageWithFallback
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500/${item.profile_path}`}
                  sizes='100vw'
                  className='h-auto w-full rounded-full object-cover object-top'
                  width={500}
                  height={300}
                />
              </div>
              <h5 className='text-lg font-semibold text-center'>{item.name}</h5>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <Divider className="text-tertiary-600 bg-tertiary-600"/>
      <h3 className='text-3xl font-semibold'>Crew</h3>

      <Splide
        aria-label='Crew Area'
        options={{
          fixedWidth: 200,
          autoplay: true,
          gap: 4,
          rewind: true,
          pagination: false,
          classes: {
            arrows: 'splide__arrows mr-4',
          },
        }}
      >
        {crew.map((item, index) => (
          <SplideSlide key={index}>
            <div className='flex flex-col items-center justify-center'>
              <div className='aspect-square overflow-clip h-40 w-40 rounded-full bg-tertiary-400'>
                <ImageWithFallback
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500/${item.profile_path}`}
                  fallbackSrc={"/user.png"}
                  sizes='100vw'
                  className='h-auto w-full rounded-full object-cover object-top'
                  width={500}
                  height={300}
                />
              </div>
              <h5 className='text-lg font-semibold text-center'>{item.name}</h5>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Credits;
