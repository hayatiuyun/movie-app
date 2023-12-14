// app/ThemeRegistry.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ThemeRegistry from './ThemeRegistry'; // Update the import path as needed
import '@testing-library/jest-dom'
import { Button } from '@mui/material';

// Mock the useServerInsertedHTML hook
jest.mock('next/navigation', () => ({
  useServerInsertedHTML: jest.fn(),
  useServerInsertedHTML: (callback) => {
    const cache = {
      key: 'mocked-cache-key', // Set a mock key value
    };
    const result = callback();
    return result ? result : <></>; // Ensure a valid return value for the hook
  },
}));

// Mock any other dependencies or context providers here if needed

describe('ThemeRegistry Component', () => {
  // Define a test case
  it('should render children', () => {
    const { getByTestId } = render(
      <ThemeRegistry options={{ key: 'mui' }}>
        <div data-testid="test-child">
          <Button data-testid="MuiButton-root" variant='contained' color='primary'>Test Child</Button>
        </div>
      </ThemeRegistry>
    );

    const childElement = getByTestId('test-child');
    const button = getByTestId('MuiButton-root');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Test Child');
    // Assert that the MuiButton component has the specified style overrides
    // expect(button).toHaveStyle('padding: 0px 20px');
    expect(button).toHaveStyle('font-size: 1rem');
    expect(button).toHaveStyle('border-radius: 12px');
    expect(button).toHaveStyle('height: 44px');
    expect(button).toHaveStyle('text-transform: capitalize');
    // expect(button).toHaveStyle('box-shadow: none');
    // expect(button).toHaveStyle('background-color: #F66D22'); // Replace with the actual color
    // expect(button).toHaveStyle('color: #F66D22'); // Replace with the actual color


  });

  // Add more test cases as needed to cover various scenarios
});
