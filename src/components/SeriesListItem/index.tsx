import React from 'react';
import ISeriesListItem from './data';
import Layout from './Layout';

export default function SeriesListItem(props: ISeriesListItem) {
  return <Layout {...props} />;
}
