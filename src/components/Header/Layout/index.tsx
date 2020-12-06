import React from 'react';
import { IHeaderLayout } from '../data';
import C from './styles';

export default function Header({ menuOptions }: IHeaderLayout) {
  return (
    <C.Container testID={`Header`}>
      <C.Content>
        <C.LogoContent>
          <C.Logo />
        </C.LogoContent>
        <C.MenuContent>
          {menuOptions.map((option, index) => (
            <C.MenuItem key={index}>
              <C.Text>{option}</C.Text>
            </C.MenuItem>
          ))}
        </C.MenuContent>
      </C.Content>
    </C.Container>
  );
}
