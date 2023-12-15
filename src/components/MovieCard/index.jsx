import Image from 'next/image';
import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import Link from 'next/link';

const MovieCard = ({
  poster_path,
  title = "",
  release_date,
  original_language,
  id,
}) => {
  return (
    <Link href={`/${id}`}>
      <div className='group relative flex cursor-pointer  flex-col overflow-hidden rounded-2xl bg-tertiary-800 shadow-lg transition-all duration-300 hover:border hover:border-primary-500'>
        <div className='overflow-hidden rounded-2xl'>
          <ImageWithFallback
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500/${poster_path}`}
            sizes='100vw'
            className='h-auto !max-h-96 w-full'
            width={500}
            alt={title}
            height={300}
          />
        </div>
        <div className='absolute flex h-full w-full flex-col justify-between bg-gradient-to-b from-black to-100% p-0 transition-all duration-300 group-hover:top-0 group-hover:opacity-100 lg:-top-10 lg:opacity-0'>
          <h5 className='p-4 text-lg font-semibold'>{title}</h5>
          <div className='inline-flex w-full justify-between self-end bg-primary p-4'>
            <span className=' text-sm font-medium'>{release_date}</span>
            <span className='text-sm font-medium uppercase'>
              {original_language}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
