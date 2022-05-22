import React from 'react';
import styled from 'styled-components/native';

interface IToast {
  type: 'error' | 'success';
  text: string;
  title?: string | null;
}

const Toast: React.FC<IToast> = ({type, text, title = null}) => {
  return (
    <ToastBlock type={type}>
      {title !== null && <ToastTitle>{title}</ToastTitle>}
      <ToastText>{text}</ToastText>
    </ToastBlock>
  );
};

type ToastStyledType = {
  type: IToast['type'];
};

const ToastBlock = styled.View<ToastStyledType>`
  border-radius: 20px;
  padding: 15px;
  background-color: ${({type}) =>
    type === 'error' ? 'rgba(255, 0, 0, .6)' : 'rgba(16, 193, 125, 0.6)'};
  margin: 10px 0;
`;

const ToastText = styled.Text`
  font-style: normal;
  font-size: 16px;
  color: #fff;
`;

const ToastTitle = styled.Text`
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

export default Toast;
