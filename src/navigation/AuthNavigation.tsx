import React from 'react';
import Register from '../screens/Auth/Register';
import Login from '../screens/Auth/Login';
import VerificationEmail from '../screens/Auth/VerificationEmail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useAppSelector } from "../store/hooks";
import { LoadingEnum } from "../store/types";
import { Text } from 'react-native';

export type AuthNavigationParamList = {
  Register: undefined;
  Login: undefined;
  VerificationEmail: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigationParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerificationEmail" component={VerificationEmail} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
