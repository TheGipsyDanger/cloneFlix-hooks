import React from 'react';
import SeriesList from './';
import { render } from '@testing-library/react-native';

describe('Render SeriesList', () => {
  it('Should be SeriesList exist', () => {
    const { getByTestId } = render(<SeriesList />);
    const currentElement = getByTestId(`SeriesList`);
    expect(currentElement).toBeTruthy();
  });
});