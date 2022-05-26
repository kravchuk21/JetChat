import React from 'react';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Formik, Field} from 'formik';
import {Screen} from '../../../styled';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AuthBlock from '../../components/AuthBlock';
import {loginValidationSchema} from '../../utils/validations/loginValidationSchema';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {signInAction} from '../../store/auth/actions';
import {LoginData} from '../../api/authApi/types';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';
import {LoadingEnum} from '../../store/types';

type LoginNavigationProps = NativeStackScreenProps<AuthNavigationParamList>;

const Login: React.FC<LoginNavigationProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const isActivated = useAppSelector(state => state.auth.isActivated);
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const handleClickOnRegister = (): void => {
    navigation.navigate('Register');
  };

  const handleClickSubmit = (values: LoginData) => {
    if (values) {
      dispatch(signInAction.request(values));
      console.log('isAuth', isAuth);
      console.log('isActivated', isActivated);
      console.log('isLoading', isLoading);
      if (isLoading === LoadingEnum.LOADED && !isActivated && isAuth) {
        console.log('VerificationEmail');
        navigation.navigate('VerificationEmail');
      }
    }
  };

  return (
    <Screen>
      <ScrollView>
        <AuthBlock
          title="Вход"
          description="Введите верные данные чтобы войти в аккаунт">
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              email: 'krauchukvlad@gmail.com',
              password: '12Urado12-',
            }}
            onSubmit={values => handleClickSubmit(values)}>
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
