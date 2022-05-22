import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Content} from '../../../styled';

type AuthBlockType = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const AuthBlock: React.FC<AuthBlockType> = ({title, description, children}) => {
  return (
    <Content>
      <AuthBlockTitle>{title}</AuthBlockTitle>
      <AuthBlockDescription>{description}</AuthBlockDescription>
      <View>{children}</View>
    </Content>
  );
};

const AuthBlockTitle = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin: 10px 0;
`;

const AuthBlockDescription = styled.Text`
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
`;

export default AuthBlock;
