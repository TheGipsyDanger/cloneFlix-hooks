import React from 'react';
import Episodes from './';
import { render } from '@testing-library/react-native';

describe('Render Episodes', () => {
  it('Should be Episodes exist', () => {
    const { getByTestId } = render(<Episodes />);
    const currentElement = getByTestId(`Episodes`);
    expect(currentElement).toBeTruthy();
  });
});