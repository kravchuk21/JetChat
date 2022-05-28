import React from 'react';
import Dialog from '../components/Dialog';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import {Content, Screen} from '../../styled';
import IconButton from '../components/IconButton';
import SettingsSvgIcon from '../assets/svg/SettingsSvgIcon';
import {useNavigation} from '@react-navigation/native';
import {useNavigationType} from '../navigation/HomeNavigation';

const Dialogs: React.FC = () => {
  const navigation = useNavigation<useNavigationType>();

  return (
    <Screen>
      <ScrollView>
        <Header
          title="JET чат"
          rightElements={
            <IconButton
              size="small"
              onClick={() => navigation.navigate('Settings')}>
              <SettingsSvgIcon />
            </IconButton>
          }
        />
        <Content>
          <Dialog
            _id="12o81741287368hsaj23"
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            _id="12o81741287368hsaj23"
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
          <Dialog
            _id="12o81741287368hsaj23"
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            _id="12o81741287368hsaj23"
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Dialogs;
