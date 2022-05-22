import React from 'react';
import styled from 'styled-components/native';
import generateAvatarFromHash from '../../utils/helpers/generateAvatarFromHash';
import LinearGradient from 'react-native-linear-gradient';

export interface IAvatar {
  size?: number;
  fullName: string;
  avatar: string | null;
}

const Avatar: React.FC<IAvatar> = ({fullName, avatar, size = 50}) => {
  const {color, colorLighten} = generateAvatarFromHash(fullName);
  const firstChar = fullName[0].toUpperCase();

  return (
    <AvatarBlock size={size} colors={[color, colorLighten]}>
      {avatar !== null && (
        <AvatarImage
          size={size}
          source={{
            uri: avatar,
          }}
        />
      )}
      {avatar === null && <AvatarChar size={size}>{firstChar}</AvatarChar>}
    </AvatarBlock>
  );
};

type AvatarStyledProps = {
  size?: number;
};

const AvatarBlock = styled(LinearGradient)<AvatarStyledProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  object-fit: cover;
`;

const AvatarChar = styled.Text<AvatarStyledProps>`
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height: ${props => props.size}px;
  font-size: ${props => Number(props.size) / 2.5}px;
`;

const AvatarImage = styled.Image<AvatarStyledProps>`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size}px;
`;
export default Avatar;
