import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../Avatar';

export interface IBubble {
  fullName: string;
  avatar: string | null;
  text?: string | null;
  date: string;
  isMe?: boolean;
}

const Bubble: React.FC<IBubble> = ({
  fullName,
  avatar,
  text = null,
  date,
  isMe = false,
}) => {
  return (
    <BubbleBlock isMe={isMe}>
      {isMe ? null : <Avatar fullName={fullName} avatar={avatar} size={30} />}
      <BubbleInfo isMe={isMe}>
        <BubbleText>{text}</BubbleText>
        <MessageDate isMe={isMe}>{date}</MessageDate>
      </BubbleInfo>
      {isMe ? <Avatar fullName={fullName} avatar={avatar} size={30} /> : null}
    </BubbleBlock>
  );
};

type BubbleStyleProps = {
  isMe: boolean;
};

const BubbleBlock = styled.View<BubbleStyleProps>`
  flex-direction: row;
  margin: 10px 0;
  justify-content: ${props => (props.isMe ? 'flex-end' : 'flex-start')};
`;

const BubbleInfo = styled.View<BubbleStyleProps>`
  background-color: ${props =>
    props.isMe ? 'rgba(16, 193, 125, 0.1)' : '#eee'};
  padding: 10px 15px;
  border-radius: 10px;
  ${props => (props.isMe ? 'margin-right' : 'margin-left')}: 10px;
  flex: 0.8;
`;

const BubbleText = styled.Text`
  font-size: 16px;
`;

const MessageDate = styled.Text<BubbleStyleProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
  color: rgb(84, 93, 105);
  text-align: ${props => (props.isMe ? 'left' : 'right')};
`;

export default Bubble;
