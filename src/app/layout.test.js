import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from './layout';
import '@testing-library/jest-dom';

describe('RootLayout', () => {
  it('renders children', () => {
    // Arrange
    const childText = <div data-testid='test-child'>Test Child Text</div>;

    // Act
    const { getByText, getByTestId } = render(
      <RootLayout>{childText}</RootLayout>
    );

    // Assert
    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  it('renders the HTML lang attribute as "en"', () => {
    // Act
    const { container } = render(<RootLayout />);

    // Assert
    expect(container.querySelector('html')).toHaveAttribute('lang', 'en');
  });

  // it('applies the Poppins font class to the body', () => {
  // Act
  // const { container } = render(<RootLayout />);

  // Assert
  //   expect(container.querySelector('body')).toHaveClass("--antares-poppins"); // Replace with the actual class name
  // });

  // Add more tests as needed for other specific behaviors
});
