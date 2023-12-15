import React from 'react';
import { render, screen } from '@testing-library/react'
import MovieCard from './index'; // Assuming the component file is in the same directory
import ImageWithFallback from '../ImageWithFallback';

// Mock the Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock the useRouter hook
jest.mock('next/router');

describe('MovieCard Component', () => {
  test('renders MovieCard with correct data', () => {
    // Mock the useRouter hook to return a dummy route
    // Mock data for MovieCard
    const movieData = {
      poster_path: '/poster.jpg',
      title: 'Movie Title',
      release_date: '2023-01-01',
      original_language: 'en',
      id: '123',
    };

    render(<MovieCard {...movieData} />);
    
    // Check if the MovieCard renders with the correct data
    const titleElement = screen.getByText('Movie Title');
    const releaseDateElement = screen.getByText('2023-01-01');
    expect(titleElement).toBeInTheDocument();
    expect(releaseDateElement).toBeInTheDocument();
  });

  // Add more test cases as neededr
});
