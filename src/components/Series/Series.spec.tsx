import React from 'react';
import Series from './';
import { render } from '@testing-library/react-native';

describe('Render Series', () => {
  it('Should be Series exist', () => {
    const { getByTestId } = render(<Series />);
    const currentElement = getByTestId(`Series`);
    expect(currentElement).toBeTruthy();
  });
});