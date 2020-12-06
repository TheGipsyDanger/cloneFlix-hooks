import React, { useState } from 'react';
import ISeriesDetails from './data';
import Layout from './Layout';
import { useSeries } from '../../hooks';

export default function SeriesDetails(props: ISeriesDetails) {
  const {
    currentSeries: { cover, description, cast },
  } = useSeries();

  const [seasonsActions, setSeasonsActions] = useState([
    {
      name: 'EPISÓDIOS',
      active: true,
    },
    {
      name: 'TÍTULOS SEMELHANTES',
      active: false,
    },
  ]);

  const seriesActions = [
    {
      icon: 'ios-add',
      text: 'Minha lista',
    },
    {
      icon: 'ios-thumbs-up',
      text: 'Classifique',
    },
    {
      icon: 'ios-send',
      text: 'Compartilhe',
    },
  ];

  function checkTab(index: number): boolean {
    return seasonsActions[index].active == true ? true : false;
  }

  function changeSelected(index: number): void {
    if (checkTab(index)) return;

    setSeasonsActions(
      seasonsActions.map(action => {
        return {
          ...action,
          active: !action.active,
        };
      })
    );
  }

  return (
    <Layout
      {...props}
      cast={cast}
      cover={cover}
      description={description}
      seriesActions={seriesActions}
      seasonsActions={seasonsActions}
      changeSelected={changeSelected}
    />
  );
}
