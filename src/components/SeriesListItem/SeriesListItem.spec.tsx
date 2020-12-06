import React from 'react';
import SeriesListItem from './';
import { render } from '@testing-library/react-native';

describe('Render SeriesListItem', () => {
  it('Should be SeriesListItem exist', () => {
    const { getByTestId } = render(<SeriesListItem />);
    const currentElement = getByTestId(`SeriesListItem`);
    expect(currentElement).toBeTruthy();
  });
});