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
  return (
    <DialogBlock onLongPress={() => Alert.alert('long press')}>
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
