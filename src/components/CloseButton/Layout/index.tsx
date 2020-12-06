import React from 'react';
import { ICloseButtonLayout } from '../data';
import C from './styles';

export default function CloseButton({ goBack }: ICloseButtonLayout) {
  return (
    <C.Container testID={`CloseButton`} onPress={() => goBack()}>
      <C.Icon />
    </C.Container>
  );
}
