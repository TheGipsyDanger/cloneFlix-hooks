import React from 'react';
import SeriesDetails from './';
import { render } from '@testing-library/react-native';

describe('Render SeriesDetails', () => {
  it('Should be SeriesDetails exist', () => {
    const { getByTestId } = render(<SeriesDetails />);
    const currentElement = getByTestId(`SeriesDetails`);
    expect(currentElement).toBeTruthy();
  });
});