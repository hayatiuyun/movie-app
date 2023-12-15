import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

// Mock useTheme and useMediaQuery
jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');
  return {
    ...originalModule,
    useTheme: jest.fn().mockReturnValue({
      breakpoints: {
        down: jest.fn().mockImplementation(() => true), // Mock always matching media query
      },
      transitions: {
        create: jest.fn(),
      },
    }),
    useMediaQuery: jest.fn().mockReturnValue(true), // Mock always matching media query
  };
});

describe('Header', () => {
  it('renders without errors', () => {
    render(<Header />);
    // Check if the component renders without errors
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
