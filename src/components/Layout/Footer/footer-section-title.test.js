import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FooterSectionTitle from './footer-section-title';
import '@testing-library/jest-dom'

describe('FooterSectionTitle', () => {
  it('renders the title correctly', () => {
    const title = 'Sample Title';
    const { getByText } = render(<FooterSectionTitle title={title} />);

    // Check if the title is rendered
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<FooterSectionTitle title="Sample Title" onClick={onClickMock} />);
    const titleContainer = container.firstChild;

    // Simulate a click event
    fireEvent.click(titleContainer);

    // Check if the onClick function was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});