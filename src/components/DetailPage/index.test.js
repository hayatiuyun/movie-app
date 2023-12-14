
// components/__tests__/DetailPageComponent.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPageComponent from './index';
import '@testing-library/jest-dom';

jest.mock('@/hook/useDetailPage', () => ({
    __esModule: true,
    default: jest.fn(() => ({
      params: {},
      details: {
        title: 'Test Movie',
        release_date: '2023-01-01',
        spoken_languages: [{ english_name: 'English' }],
        genres: [{ id: 1, name: 'Action' }],
        overview: 'Test overview',
        poster_path: '/test-poster.jpg',
      },
      isLoading: false,
      error: null,
    })),
  }));
  
  describe('DetailPageComponent', () => {
    test('renders detail page correctly', () => {
      render(<DetailPageComponent />);
      
      // Assert that important elements are present
      expect(screen.getByText('Test Movie')).toBeInTheDocument();
      expect(screen.getByText('2023-01-01 • English')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
      expect(screen.getByText('Test overview')).toBeInTheDocument();
    });
  
    // Add more tests as needed
  });