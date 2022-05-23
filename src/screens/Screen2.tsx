import React from 'react';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import {Alert, ScrollView, Text} from 'react-native';
import {Content, Screen} from '../../styled';
import IconButton from '../components/IconButton';
import GoBackSvgIcon from '../assets/svg/GoBackSvgIcon';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../store/slices/auth';
import {useAppDispatch, useAppSelector} from '../store/hooks';

type Screen2NavigationProps = NativeStackScreenProps<RootStackParamList>;

const Screen2: React.FC<Screen2NavigationProps> = ({navigation}) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

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
          <Text>{count}</Text>
          <Button onClick={() => dispatch(increment())} outline>
            +
          </Button>
          <Button
            onClick={() => dispatch(incrementByAmount({count: 2}))}
            outline>
            +2
          </Button>
          <Button onClick={() => dispatch(decrement())} outline>
            -
          </Button>
          <Button onClick={() => navigation.navigate('Screen1')}>
            Screen1
          </Button>
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Screen2;
