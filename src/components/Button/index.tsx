import React from 'react';
import styled from 'styled-components/native';

interface IButton {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({children, disabled = false, onClick}) => {
  const handleClick = (): void => {
    if (disabled) {
      return;
    }
    onClick();
  };
  return (
    <ButtonContent onPress={handleClick} disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </ButtonContent>
  );
};

const ButtonContent = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props => (props.disabled ? '#cccccc' : '#10c17d')};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

export default Button;
