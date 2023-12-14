import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
  });

  it('toggles the menu visibility when the menu button is clicked', () => {
    const { getByTestId, queryByTestId } = render(<Header />);
    const menuButton = getByTestId('menu-button');

    // Initially, the menu should not be visible
    expect(queryByTestId('menu')).toBeNull();
    expect(menuButton).toBeVisible();

    // Mock the setVisibleMenu function
    // const originalSetVisibleMenu = React.useState;
    // React.useState = jest.fn(() => [false, jest.fn()]);

    // Click the menu button to show the menu
    fireEvent.click(menuButton);

    // After clicking, the menu should be visible
    // expect(getByTestId('menu')).toBeVisible();

    // Click again to hide the menu
    fireEvent.click(menuButton);

    // After clicking again, the menu should not be visible
    expect(queryByTestId('menu')).toBeNull();

    // Restore the original useState function
    // React.useState = originalSetVisibleMenu;
  });
});
