import React from 'react';
import styled from 'styled-components/native';
import generateAvatarFromHash from '../../utils/helpers/generateAvatarFromHash';
import LinearGradient from 'react-native-linear-gradient';

interface IAvatar {
  fullName: string;
  avatar: string | null;
}

const Avatar: React.FC<IAvatar> = ({fullName, avatar}) => {
  const {color, colorLighten} = generateAvatarFromHash(fullName);
  const firstChar = fullName[0].toUpperCase();
  return (
    <AvatarBlock colors={[color, colorLighten]}>
      {avatar !== null && (
        <AvatarImage
          source={{
            uri: avatar,
          }}
        />
      )}
      {avatar === null && <AvatarChar>{firstChar}</AvatarChar>}
    </AvatarBlock>
  );
};

const AvatarBlock = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

const AvatarChar = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height: 50px;
  font-size: 20px;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
export default Avatar;
