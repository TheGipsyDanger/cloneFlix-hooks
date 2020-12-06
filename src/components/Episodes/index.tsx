import React from 'react';
import IEpisodes from './data';
import Layout from './Layout';
import episodes from '../../../assets/jsons/episodes.json';

export default function Episodes(props: IEpisodes) {
  return <Layout {...props} episodesList={episodes} />;
}
