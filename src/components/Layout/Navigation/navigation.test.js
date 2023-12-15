import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation'; // Assuming the component file is in the same directory
import { navigations } from './navigation.data';
import { usePathname } from 'next/navigation';

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(),
}));

// Mock the navigations array
jest.mock('./navigation.data', () => ({
  navigations: [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    // Add more mock data as needed
  ],
}));

describe('Navigation Component', () => {
  test('renders navigation items', () => {
    // Mock the usePathname hook to return a specific value
    usePathname.mockReturnValue('/home');

    render(<Navigation />);
    
    // Check if each navigation item is rendered
    navigations.forEach(({ label }) => {
      const navigationItem = screen.getByText(label);
      expect(navigationItem).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
