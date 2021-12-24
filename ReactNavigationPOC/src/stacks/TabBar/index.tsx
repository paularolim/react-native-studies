import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../../screens/Profile';
import {Configurations} from '../../screens/Configurations';
import {HomeStack} from '../Home';

const MainTabBar = createBottomTabNavigator();

export const TabBar = () => (
  <MainTabBar.Navigator>
    <MainTabBar.Screen name="HomeStack" component={HomeStack} />
    <MainTabBar.Screen name="ProfileStack" component={Profile} />
    <MainTabBar.Screen name="ConfigurationsStack" component={Configurations} />
  </MainTabBar.Navigator>
);
