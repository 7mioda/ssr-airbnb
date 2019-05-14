import React from 'react';
import {
  render,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Footer from '../components/Footer/Footer';


test('check footer ', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Carrières/i)).toBeInTheDocument();
});
