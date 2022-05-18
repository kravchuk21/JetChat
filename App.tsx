import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
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
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
