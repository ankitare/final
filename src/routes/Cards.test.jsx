import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../Cards';

test('renders Cards component with title and image', () => {
    const cardProps = {
      title: 'Sample Card Title',
      image: 'https://example.com/sample-image.jpg',
    };
  
    const { getByText, getByTestId } = render(<Cards {...cardProps} />);
    expect(getByText('Sample Card Title')).toBeInTheDocument();
    expect(getByTestId('cards')).toBeInTheDocument(); 
});

test('renders Cards component with text', () => {
    const cardProps = {
      text: 'Sample card text content',
    };
  
    const { getByText, getByTestId } = render(<Cards {...cardProps} />);
    expect(getByText('Sample card text content')).toBeInTheDocument();
});

test('renders Cards component with button link', () => {
    const cardProps = {
      buttonLink: <button>Sample Button</button>,
    };
  
    const { getByText, getByTestId } = render(<Cards {...cardProps} />);
    expect(getByText('Sample Button')).toBeInTheDocument();
});

