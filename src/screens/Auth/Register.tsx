import React from 'react';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Formik, Field} from 'formik';
import {Screen} from '../../../styled';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {registerValidationSchema} from '../../utils/validations/registerValidationSchema';
import AuthBlock from '../../components/AuthBlock';

type RegisterNavigationProps = NativeStackScreenProps<RootStackParamList>;

const Register: React.FC<RegisterNavigationProps> = ({navigation}) => {
  const handleClickOnLogin = (): void => {
    navigation.navigate('Login');
  };

  const handleClickSubmit = (values: any) => {
    console.log(values);
    navigation.navigate('Screen1');
  };

  return (
    <Screen>
      <ScrollView>
        <AuthBlock
          title="Регистрация"
          description="Введите верные данные чтобы создать аккаунт">
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{fullName: '', email: '', password: ''}}
            onSubmit={handleClickSubmit}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={Input}
                  name="fullName"
                  placeholder="Фамилия и Имя"
                />
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
                  Создать аккаунт
                </Button>
                <Button onClick={handleClickOnLogin} outline>
                  Войти
                </Button>
              </>
            )}
          </Formik>
        </AuthBlock>
      </ScrollView>
    </Screen>
  );
};

export default Register;
