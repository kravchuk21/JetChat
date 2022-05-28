import React from 'react';
import Dialogs from '../screens/Dialogs';
import Dialog from '../screens/Dialog';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import {CompositeNavigationProp} from '@react-navigation/native';

export type HomeNavigationParamList = {
  Dialogs: undefined;
  Dialog: undefined;
  Settings: undefined;
};

export type useNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<HomeNavigationParamList>,
  NativeStackNavigationProp<HomeNavigationParamList>
>;

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dialogs">
      <Stack.Screen name="Dialogs" component={Dialogs} />
      <Stack.Screen name="Dialog" component={Dialog} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
