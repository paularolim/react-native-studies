import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home';
import {Products} from '../../screens/Products';

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Products" component={Products} />
  </Stack.Navigator>
);
