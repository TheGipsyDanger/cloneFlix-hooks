import React from 'react';
import IHome from './data';
import Layout from './Layout';
import { Animated } from 'react-native';

export default function Home(props: IHome) {
  const translateY = new Animated.Value(0);
  // @ts-ignore
  const animatedEvent = new Animated.event<any>([
    {
      nativeEvent: {
        contentOffset: {
          y: translateY,
        },
      },
    },
  ]);

  return (
    <Layout {...props} animatedEvent={animatedEvent} translateY={translateY} />
  );
}
