import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

test('Nav component is displayed with navigation links', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  expect(screen.getByText('Gifting 101')).toBeInTheDocument();
  expect(screen.getByText('My Wishlist')).toBeInTheDocument();
  expect(screen.getByText('Create New Gift')).toBeInTheDocument();
  expect(screen.getByText('Gift Blog')).toBeInTheDocument();
  expect(screen.getByText('About Us')).toBeInTheDocument();
});


  
