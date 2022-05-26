import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkAuthAction} from '../store/auth/actions';

const Navigation = () => {
  const {isAuth, isActivated} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getToken = async () => {
      return await AsyncStorage.getItem('token');
    };
    getToken().then(res => {
      if (res) {
        dispatch(checkAuthAction.request({}));
      }
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isAuth && isActivated ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
