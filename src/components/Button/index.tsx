import React from 'react';
import styled from 'styled-components/native';

interface IButton {
  children: string;
  disabled?: boolean;
  onClick: () => void;
  outline?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  disabled = false,
  onClick,
  outline = false,
}) => {
  const handleClick = (): void => {
    if (disabled) {
      return;
    }
    onClick();
  };
  return (
    <ButtonContent onPress={handleClick} disabled={disabled} outline={outline}>
      <ButtonText outline={outline}>{children}</ButtonText>
    </ButtonContent>
  );
};

type ButtonContentType = {
  disabled: boolean;
  outline: boolean;
};

const ButtonContent = styled.TouchableOpacity<ButtonContentType>`
  margin: 5px 0;
  padding: 14px;
  border-radius: 32px;
  border-width: 2px;
  border-color: ${({outline}) => (outline ? '#10c17d' : '#ffffff')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({outline, disabled}) =>
    outline ? '#ffffff' : disabled ? '#cccccc' : '#10c17d'};
`;

type ButtonTextType = {
  outline: boolean;
};

const ButtonText = styled.Text<ButtonTextType>`
  color: ${({outline}) => (outline ? '#10c17d' : '#ffffff')};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

export default Button;
