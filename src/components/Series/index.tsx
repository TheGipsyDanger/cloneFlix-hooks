import React from 'react';
import ISeries from './data';
import series from '../../../assets/jsons/list.json';
import Layout from './Layout';

export default function Series(props: ISeries) {
  return <Layout {...props} series={series} />;
}
