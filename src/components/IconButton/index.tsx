import React from 'react';
import styled from 'styled-components/native';

interface IIconButton {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'large' | 'small';
}

const IconButton: React.FC<IIconButton> = ({
  children,
  onClick,
  size = 'large',
}) => {
  const handleClick = (): void => {
    onClick();
  };
  return (
    <IconButtonContent size={size} onPress={handleClick}>
      {children}
    </IconButtonContent>
  );
};

type IconButtonContentType = {
  size: IIconButton['size'];
};

const IconButtonContent = styled.TouchableOpacity<IconButtonContentType>`
  width: ${props => (props.size === 'small' ? '40px' : '56px')};
  height: ${props => (props.size === 'small' ? '40px' : '56px')};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(16, 193, 125, 0.1);
`;

export default IconButton;
