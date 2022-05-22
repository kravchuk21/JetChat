import React from 'react';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Formik, Field} from 'formik';
import {Screen} from '../../../styled';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AuthBlock from '../../components/AuthBlock';
import {loginValidationSchema} from '../../utils/validations/loginValidationSchema';

type LoginNavigationProps = NativeStackScreenProps<RootStackParamList>;

const Login: React.FC<LoginNavigationProps> = ({navigation}) => {
  const handleClickOnRegister = (): void => {
    navigation.navigate('Register');
  };

  return (
    <Screen>
      <ScrollView>
        <AuthBlock
          title="Вход"
          description="Введите верные данные чтобы войти в аккаунт">
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <Field
                  component={Input}
                  name="password"
                  placeholder="Пароль"
                  secureTextEntry
                />

                <Button
                  onClick={handleSubmit}
                  disabled={!isValid || values.email === ''}>
                  Войти
                </Button>
                <Button onClick={handleClickOnRegister} outline>
                  Создать аккаунт
                </Button>
              </>
            )}
          </Formik>
        </AuthBlock>
      </ScrollView>
    </Screen>
  );
};

export default Login;
