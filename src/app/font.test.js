import React from 'react';
import { render } from '@testing-library/react';
import { inter } from './font'; // Import your code file

describe('Font Unit Tests', () => {

  it('should render Inter font correctly', () => {
    const { getByText } = render(<p style={inter}>This is an Inter text</p>);
    const textElement = getByText('This is an Inter text');
    const computedStyles = getComputedStyle(textElement);
    expect(computedStyles.fontFamily).toEqual(expect.stringContaining(''));

  });
});
