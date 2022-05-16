import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const DialogBlock = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const DialogName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: rgb(9, 16, 29);
  margin-bottom: 5px;
`;

export const DialogContentBlock = styled.View`
  flex: 1;
  margin: 0 15px;
`;

export const DialogInfoBlock = styled.View`
  align-items: flex-end;
`;

export const LastMessageText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgb(84, 93, 105);
`;

export const LastMessageDate = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgb(84, 93, 105);
  margin-bottom: 5px;
`;

export const UnreadMessageCount = styled(LinearGradient)`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const UnreadMessageCountText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
`;
