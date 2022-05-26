import React from 'react';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type HomeNavigationParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
