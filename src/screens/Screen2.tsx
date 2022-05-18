import React from 'react';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import {Alert, ScrollView} from 'react-native';
import {Content, Screen} from '../../styled';
import IconButton from '../components/IconButton';
import GoBackSvgIcon from '../assetc/svg/GoBackSvgIcon';

type Screen2NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Screen2: React.FC<Screen2NavigationProps> = ({navigation}) => {
  return (
    <Screen>
      <ScrollView>
        <Header
          title="Screen2"
          goBack
          avatar={{
            fullName: 'Vlad Scherba',
            avatar:
              'https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
          }}
          rightElements={
            <IconButton
              size="small"
              onClick={() => Alert.alert('Right Element Icon Button')}>
              <GoBackSvgIcon />
            </IconButton>
          }
        />
        <Content>
          <Button onClick={() => navigation.navigate('Screen1')}>
            Screen1
          </Button>
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Screen2;
