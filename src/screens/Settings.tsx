import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import {Content, Screen} from '../../styled';
import {useAppDispatch} from '../store/hooks';
import {logOutAction} from '../store/auth/actions';
import Button from '../components/Button';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logOutAction.request({}));
  };

  return (
    <Screen>
      <ScrollView>
        <Header title="Настройки" goBack />
        <Content>
          <Button onClick={logOut}>Log Out</Button>
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Settings;
