import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../src/Pages/Contact';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Contact />);
    const myComponent = getByTestId('my-component');
    expect(myComponent).toBeInTheDocument();
  });
});
