import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FooterNavigation from './footer-navigation';
import { useTheme } from '@mui/material';
import '@testing-library/jest-dom'

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');
  return {
    ...originalModule,
    useTheme: jest.fn().mockReturnValue({
      breakpoints: {
        up: jest.fn().mockImplementation(() => true), // Mock always matching media query
      },
      transitions: {
        create: jest.fn(),
      },
    }),
    useMediaQuery: jest.fn().mockReturnValue(true), // Mock always matching media query
  };
});
describe('FooterNavigation', () => {
  it('renders the FooterNavigation component correctly', () => {
    const { getByText } = render(<FooterNavigation />);

    // Check if the title "Solutions" is present
    const solutionsTitle = getByText('Solutions');
    expect(solutionsTitle).toBeInTheDocument();

    // Check if a navigation item in the "Solutions" section is present
    const smartUtilitiesNavItem = getByText('Smart Utilities');
    expect(smartUtilitiesNavItem).toBeInTheDocument();

    // You can add similar checks for other sections and navigation items
  });
});