import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Avatar, {IAvatar} from '../Avatar';
import GoBackSvgIcon from '../../assets/svg/GoBackSvgIcon';

interface IHeader {
  title: string;
  goBack?: boolean;
  avatar?: IAvatar | null;
  rightElements?: React.ReactNode | null;
}

const Header: React.FC<IHeader> = ({
  title,
  goBack = false,
  avatar = null,
  rightElements = null,
}) => {
  return (
    <HeaderBlock>
      {goBack && <GoBack />}
      {avatar !== null && (
        <View style={{marginRight: 15}}>
          <Avatar
            size={35}
            fullName={avatar.fullName}
            avatar={avatar?.avatar}
          />
        </View>
      )}
      <HeaderTitle>{title}</HeaderTitle>
      {rightElements !== null && rightElements}
    </HeaderBlock>
  );
};

const GoBack: React.FC = () => {
  const navigation = useNavigation();
  return (
    <GoBackBlock onPress={() => navigation.goBack()}>
      <GoBackSvgIcon size={20} />
    </GoBackBlock>
  );
};

const GoBackBlock = styled.TouchableOpacity`
  margin-right: 15px;
`;

const HeaderBlock = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 24px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

const HeaderTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #09101d;
  flex: 1;
`;

export default Header;
