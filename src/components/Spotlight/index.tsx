import React from 'react';
import ISpotlight from './data';
import Layout from './Layout';

export default function Spotlight(props: ISpotlight) {
  const tagsOptions = ['Violentos', ' • Empolgantes  • ', 'Épicos'];

  return <Layout {...props} tagsOptions={tagsOptions} />;
}
