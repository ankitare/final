import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

test('Navigation works when clicking on Explore Gifts button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    fireEvent.click(getByText('Explore Gifts'));
});

test('Navigation works when clicking on Read Blog Posts button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    fireEvent.click(getByText('Read Blog Posts'));
});

test('Navigation works when clicking on Create Gift Entries button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    fireEvent.click(getByText('Create Gift Entries'));
});

test('Navigation works when clicking on Explore Wishlist button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    fireEvent.click(getByText('Explore Wishlist'));
});

