import React from 'react';
import { ISeriesLayout } from '../data';
import SeriesList from '../../SeriesList';
import C from './styles';

export default function Series({ series }: ISeriesLayout) {
  return (
    <C.Container testID={`Series`}>
      {series.map((list, index) => (
        <SeriesList key={index} list={list} />
      ))}
    </C.Container>
  );
}
