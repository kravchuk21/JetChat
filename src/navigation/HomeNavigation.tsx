import React from 'react';
import Dialogs from '../screens/Dialogs';
import Dialog from '../screens/Dialog';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type HomeNavigationParamList = {
  Dialogs: undefined;
  Dialog: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dialog">
      <Stack.Screen name="Dialogs" component={Dialogs} />
      <Stack.Screen name="Dialog" component={Dialog} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
