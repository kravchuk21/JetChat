import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../components/Header';
import {FlatList, StyleSheet} from 'react-native';
import {HomeNavigationParamList} from '../navigation/HomeNavigation';
import Bubble, {IBubble} from '../components/Bubble';
import styled from 'styled-components/native';

type Screen2NavigationProps = NativeStackScreenProps<HomeNavigationParamList>;

const DATA: IBubble[] = [
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world',
    date: '12:34',
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world',
    date: '12:34',
    isMe: true,
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world',
    date: '12:34',
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world',
    date: '12:34',
    isMe: true,
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world',
    date: '12:34',
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world',
    date: '12:34',
    isMe: true,
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world',
    date: '12:34',
  },
  {
    fullName: 'Roman Dusk',
    avatar: null,
    text: 'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world',
    date: '12:34',
    isMe: true,
  },
];

const Dialog: React.FC<Screen2NavigationProps> = () => {
  return (
    <DialogScreen>
      <Header
        title="Vlad Herschbach"
        goBack
        avatar={{
          fullName: 'Vlad Herschbach',
          avatar:
            'https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
        }}
      />
      <FlatList
        style={styles.messagesBlock}
        inverted
        data={DATA}
        renderItem={({item}) => {
          return (
            <Bubble
              fullName={item.fullName}
              avatar={item.avatar}
              date={item.date}
              isMe={!!item?.isMe}
              text={item.text}
            />
          );
        }}
      />
    </DialogScreen>
  );
};

const DialogScreen = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const styles = StyleSheet.create({
  messagesBlock: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
  },
});

export default Dialog;
