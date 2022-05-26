import React from 'react';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Formik, Field} from 'formik';
import {Screen} from '../../../styled';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {registerValidationSchema} from '../../utils/validations/registerValidationSchema';
import AuthBlock from '../../components/AuthBlock';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';
import {RegistrationData} from '../../api/authApi/types';
import {registerAction} from '../../store/auth/actions';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {LoadingEnum} from '../../store/types';

type RegisterNavigationProps = NativeStackScreenProps<AuthNavigationParamList>;

const Register: React.FC<RegisterNavigationProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const handleClickOnLogin = (): void => {
    navigation.navigate('Login');
  };

  const handleClickSubmit = (values: RegistrationData) => {
    if (values) {
      try {
        dispatch(registerAction.request(values));
        if (isLoading !== LoadingEnum.ERROR && isAuth !== null) {
          navigation.navigate('Login');
        }
      } catch (err) {
        console.log(err);
      }
    }
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
