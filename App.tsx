import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Auth/Register';
import Login from './src/screens/Auth/Login';
import VerificationEmail from './src/screens/Auth/VerificationEmail';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Register: undefined;
  Login: undefined;
  VerificationEmail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Screen1">
        <Stack.Group>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="VerificationEmail"
            component={VerificationEmail}
          />
        </Stack.Group>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
