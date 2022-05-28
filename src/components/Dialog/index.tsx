import React from 'react';
import Avatar from '../Avatar';
import {
  DialogBlock,
  DialogContentBlock,
  DialogInfoBlock,
  DialogName,
  LastMessageDate,
  LastMessageText,
  UnreadMessageCount,
} from './styled';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNavigationType} from '../../navigation/HomeNavigation';

interface IDialog {
  _id: string;
  dialogName: string;
  lastMessageText: string;
  lastMessageDate: string;
  avatar: string | null;
  unreadMessages: number;
}

const Dialog: React.FC<IDialog> = ({
  _id,
  dialogName,
  lastMessageDate,
  lastMessageText,
  unreadMessages,
  avatar,
}) => {
  const navigation = useNavigation<useNavigationType>();

  const handleSelectDialog = () => {
    navigation.navigate('Dialog');
  };

  return (
    <DialogBlock
      onPress={handleSelectDialog}
      onLongPress={() => Alert.alert('long press')}>
      <Avatar fullName="Vladislav Kravchuk" avatar={avatar} />
      <DialogContentBlock>
        <DialogName>{dialogName}</DialogName>
        <LastMessageText ellipsizeMode="tail" numberOfLines={1}>
          {lastMessageText}
        </LastMessageText>
      </DialogContentBlock>
      <DialogInfoBlock>
        <LastMessageDate>{lastMessageDate}</LastMessageDate>
        {unreadMessages >= 1 && (
          <UnreadMessageCount>{unreadMessages}</UnreadMessageCount>
        )}
      </DialogInfoBlock>
    </DialogBlock>
  );
};

export default Dialog;
