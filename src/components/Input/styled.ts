import styled from 'styled-components/native';

export const InputBlock = styled.View<{focus: boolean; error: boolean}>`
  border-radius: 32px;
  border-width: 2px;
  border-color: ${props =>
    props.focus ? '#10c17d' : props.error ? 'red' : '#cccccc'};
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const TextInputBlock = styled.TextInput`
  flex: 1;
  padding: 10px 0;
  font-size: 16px;
`;

export const TextInputError = styled.Text`
  color: red;
`;
