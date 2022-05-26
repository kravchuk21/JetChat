import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/Application';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
};

export default App;
