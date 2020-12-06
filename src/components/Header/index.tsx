import React from 'react';
import IHeader from './data';
import Layout from './Layout';

export default function Header(props: IHeader) {
  const menuOptions = ['Séries', 'Filmes', 'Minha Lista'];
  return <Layout {...props} menuOptions={menuOptions} />;
}
