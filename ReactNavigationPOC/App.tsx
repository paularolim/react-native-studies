import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabBar} from './src/stacks/TabBar';

export const App = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};
