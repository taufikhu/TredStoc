import React from 'react';
import { render, screen } from '@testing-library/react'; // Import the render and screen utilities from React Testing Library
import Hero from '../landing_page/home/Hero'; // Adjust the import path based on your project structure
import '@testing-library/jest-dom/'; // Import jest-dom for additional matchers
import Borkrage from '../landing_page/pricing/Brokrage'; // Adjust the import path based on your project structure


describe('Hero component', () => { // Describe the test suite for the Hero component
  test('renders the Hero component with correct content', () => { // Define a test case to check if the Hero component renders correctly
    render(<Hero />); // Render the Hero component using the render function from React Testing Library
    expect(screen.getByAltText('Hero Image')).toBeInTheDocument(); // Assert that the image with alt text "Hero Image" is present in the document
    
});
});


describe('Brokrage component', () => { // Describe the test suite for the Brokrage component
  test('renders the Brokrage component with correct content', () => { // Define a test case to check if the Brokrage component renders correctly
    render(<Borkrage />); // Render the Brokrage component using the render function from React Testing Library 
    expect(screen.getByAltText('Sensibull')).toBeInTheDocument(); // Assert that the image with alt text "Brokrage Image" is present in the document
  });
});
