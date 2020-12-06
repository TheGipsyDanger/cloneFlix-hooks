import React from 'react';
import ICloseButton from './data';
import Layout from './Layout';
import { useNavigation } from '@react-navigation/native';

export default function CloseButton(props: ICloseButton) {
  const navigation = useNavigation();

  function goBack(): void {
    navigation.goBack();
  }

  return <Layout {...props} goBack={goBack} />;
}
