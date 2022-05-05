import React from 'react';

import { render, cleanup } from '@testing-library/react';

// import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; //offers access to custom matchers that are used to test DOM elements

import About from '..';

// call the cleanup function using the afterEach global function from Jest:
afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    //renders About test
    // First Test
    it('renders', () => {
        render(<About />);
      });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  })