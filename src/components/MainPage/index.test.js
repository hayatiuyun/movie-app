import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainPage from './index';
import { act } from 'react-dom/test-utils';
import useListMovie from '@/hook/useListMovie';

// Mock useListMovie hook
jest.mock('@/hook/useListMovie');

describe('MainPage Component', () => {
  test('renders MainPage and handles load more', async () => {
    // Mock data for useListMovie hook
    const mockData = {
      page: 1,
      results: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ],
      total_pages: 2,
      total_results: 4,
    };

    const mockSetPage = jest.fn((page) => page + 1);
    const mockMutate = jest.fn();
    const mockUseListMovie = {
      data: mockData.results,
      error: null,
      isLoading: false,
      isValidating: false,
      page: 1,
      setPage: mockSetPage,
      value: 'now_playing',
      totalPages: 2,
      totalResults: 4,
      mutate: mockMutate,
      handleChangeValue: jest.fn(),
    };
    useListMovie.mockReturnValue(mockUseListMovie);

    // Spy on the setPage and mutate methods
    const setPageSpy = jest.spyOn(mockUseListMovie, 'setPage');
    const mutateSpy = jest.spyOn(mockUseListMovie, 'mutate');

    render(<MainPage />);

    // Check if the MovieList renders with the initial data
    const movieList = screen.getByTestId('movie-list');
    expect(movieList).toBeInTheDocument();

    // Trigger load more only if page < totalPages
    act(() => {
      if ((mockUseListMovie.isLoading && mockUseListMovie.totalPages > 1) || mockUseListMovie.data) {
        fireEvent.click(screen.getByText('Load More'));
      }
    });

    // Restore the original methods after testing
    setPageSpy.mockRestore();
    mutateSpy.mockRestore();
  });

  // Add more test cases as needed
});