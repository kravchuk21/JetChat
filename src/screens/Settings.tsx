import React from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import {Content, Screen} from '../../styled';
import {useAppDispatch} from '../store/hooks';
import {logOutAction} from '../store/auth/actions';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import styled from 'styled-components/native';

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
          <UserInfo>
            <Avatar fullName="Arsen" avatar={null} size={70} />
            <UserInfoText>
              <FullName>Arsen Minkov</FullName>
              <Text>krauchukvlad@gmail.com</Text>
            </UserInfoText>
          </UserInfo>
          <Button onClick={logOut} outline>
            Выйти из аккаунта
          </Button>
        </Content>
      </ScrollView>
    </Screen>
  );
};

const UserInfo = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const UserInfoText = styled.View`
  margin-left: 20px;
`;

const FullName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export default Settings;
