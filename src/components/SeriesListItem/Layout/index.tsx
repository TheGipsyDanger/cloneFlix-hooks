import React from 'react';
import { ISeriesListItemLayout } from '../data';
import C from './styles';

export default function SeriesListItem({
  lastItem,
  specialType,
  item: { cover },
}: ISeriesListItemLayout) {
  function ComumItem() {
    return (
      <C.Container testID={`SeriesListItem`} lastItem={lastItem}>
        <C.Image source={{ uri: cover }} />
      </C.Container>
    );
  }

  function SpecialItem() {
    return (
      <C.SpecialContainer testID={`SeriesListItem`} lastItem={lastItem}>
        <C.SpecialImage source={{ uri: cover }} />
      </C.SpecialContainer>
    );
  }

  return specialType ? SpecialItem() : ComumItem();
}
