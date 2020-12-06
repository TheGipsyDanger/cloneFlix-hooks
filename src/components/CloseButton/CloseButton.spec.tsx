import React from 'react';
import CloseButton from './';
import { render } from '@testing-library/react-native';

describe('Render CloseButton', () => {
  it('Should be CloseButton exist', () => {
    const { getByTestId } = render(<CloseButton />);
    const currentElement = getByTestId(`CloseButton`);
    expect(currentElement).toBeTruthy();
  });
});