import React from 'react';
import { render } from '@testing-library/react';
import BlogCards from './BlogCards';

test('BlogCards component displayed with title and text', () => {
    const blog = {
      title: 'Sample blog title',
      text: 'Sample blog text content',
    };

    const { getByText } = render(<BlogCards {...blog} />);
    expect(getByText('Sample blog title')).toBeInTheDocument();
    expect(getByText('Sample blog text content')).toBeInTheDocument();
});

test('renders BlogCards component with button link', () => {
    const blog = {
      buttonLink: <button>Sample Button</button>,
    };
  
    const { getByText, getByTestId } = render(<BlogCards {...blog} />);
    expect(getByText('Sample Button')).toBeInTheDocument();
});
