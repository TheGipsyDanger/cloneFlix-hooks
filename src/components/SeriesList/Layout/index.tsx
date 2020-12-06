import React from 'react';
import { ISeriesListLayout } from '../data';
import { ISerieListItem as IItem } from '../../../utils/interfaces';
import SeriesListItem from '../../SeriesListItem';
import C from './styles';

export default function SeriesList({
  list: { list_title, list_type, items },
  setSerieAndGoTo,
}: ISeriesListLayout) {
  return (
    <C.Container testID={`SeriesList`}>
      {list_type != 'special' && <C.Title>{list_title}</C.Title>}
      <C.List<React.ElementType>
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }: { item: IItem; index: number }) => (
          <C.Item onPress={() => setSerieAndGoTo(item)}>
            <SeriesListItem
              item={item}
              specialType={list_type == 'special'}
              lastItem={items.length - 1 == index}
            />
          </C.Item>
        )}
        keyExtractor={(item: IItem, index: number) => String(index)}
      />
    </C.Container>
  );
}
