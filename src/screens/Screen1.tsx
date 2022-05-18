import React from 'react';
import Dialog from '../components/Dialog';
import Button from '../components/Button';
import {Alert, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import {Content, Screen} from '../../styled';
import IconButton from '../components/IconButton';
import GoBackSvgIcon from '../assetc/svg/GoBackSvgIcon';

type Screen1NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Screen1: React.FC<Screen1NavigationProps> = ({navigation}) => {
  return (
    <Screen>
      <ScrollView>
        <Header
          title="Screen1"
          rightElements={
            <IconButton
              size="small"
              onClick={() => Alert.alert('Right Element Icon Button')}>
              <GoBackSvgIcon />
            </IconButton>
          }
        />
        <Content>
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
          <Button onClick={() => navigation.navigate('Screen2')}>
            Screen 2
          </Button>
          <Button onClick={() => Alert.alert('Outline Button')} outline>
            Outline Button
          </Button>
          <Button onClick={() => Alert.alert('Disable Button')} disabled>
            Disable Button
          </Button>
          <IconButton
            onClick={() => Alert.alert('Small Icon Button')}
            size="small">
            <GoBackSvgIcon />
          </IconButton>
          <IconButton onClick={() => Alert.alert('Icon Button')}>
            <GoBackSvgIcon />
          </IconButton>
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Screen1;
