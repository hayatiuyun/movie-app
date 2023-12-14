import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders the footer component correctly', () => {
    const { getByTestId, getByText } = render(<Footer />);

    // Check if the footer component is rendered
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    // Check if the text is present in the footer
    const copyrightText = getByTestId('copyright');
    expect(copyrightText).toBeInTheDocument();
  });
});
