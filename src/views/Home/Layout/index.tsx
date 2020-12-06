import React from 'react';
import { IHomeLayout } from '../data';
import { Spotlight, Series } from '../../../components';
import C from './styles';

export default function Home({ animatedEvent, translateY }: IHomeLayout) {
  return (
    <C.Container
      testID={`Home`}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={animatedEvent}>
      <Spotlight translateY={translateY} />
      <Series />
    </C.Container>
  );
}
