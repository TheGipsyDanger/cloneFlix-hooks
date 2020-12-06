import React from 'react';
import ISeriesList from './data';
import Layout from './Layout';
import { ISerieListItem } from '../../utils/interfaces';
import { useNavigation } from '@react-navigation/native';
import { useSeries } from '../../hooks';

export default function SeriesList(props: ISeriesList) {
  const navigation = useNavigation();
  const { defineCurrentSeries } = useSeries();

  function setSerieAndGoTo(serie: ISerieListItem): void {
    defineCurrentSeries(serie);
    navigation.navigate('SeriesDetails');
  }

  return <Layout {...props} setSerieAndGoTo={setSerieAndGoTo} />;
}
