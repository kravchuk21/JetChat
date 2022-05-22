import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Screen} from '../../../styled';
import AuthBlock from '../../components/AuthBlock';
import Button from '../../components/Button';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type VerificationEmailNavigationProps =
  NativeStackScreenProps<RootStackParamList>;

const CELL_COUNT = 4;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  cell: {
    borderWidth: 2,
    borderColor: '#cccccc',
    textAlign: 'center',
    width: 50,
    height: 50,
    lineHeight: 50,
    borderRadius: 15,
    fontSize: 18,
  },
  focusCell: {
    borderColor: '#10c17d',
  },
});

const VerificationEmail: React.FC<VerificationEmailNavigationProps> = ({
  navigation,
}) => {
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleClickOnLogin = (): void => {
    navigation.navigate('Login');
  };

  return (
    <Screen>
      <ScrollView>
        <AuthBlock
          title="Подтверждение почты"
          description="Введите код отправленный вам нга почту">
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Button
            onClick={handleClickOnLogin}
            disabled={!(value.length === CELL_COUNT)}>
            Подтвердить Email
          </Button>
          <Button onClick={handleClickOnLogin} outline>
            Войти
          </Button>
        </AuthBlock>
      </ScrollView>
    </Screen>
  );
};

export default VerificationEmail;
