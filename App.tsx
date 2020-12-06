import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider, ModalController } from './src/components';
import Routes from './src/routes/Routes';

console.disableYellowBox = true;

const App: React.FC = () => (
  <NavigationContainer>
    <GlobalProvider>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Routes />
      <ModalController />
    </GlobalProvider>
  </NavigationContainer>
);

export default App;
