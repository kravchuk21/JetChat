import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Avatar from './src/components/Avatar';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Avatar
        fullName="Vladislav Kravchuk"
        // avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
        avatar={null}
      />
    </SafeAreaView>
  );
};

export default App;
