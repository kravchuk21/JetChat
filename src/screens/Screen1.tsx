import React from 'react';
import Dialog from '../components/Dialog';
import Button from '../components/Button';
import {Alert, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import {Content, Screen} from '../../styled';
import IconButton from '../components/IconButton';
import GoBackSvgIcon from '../assets/svg/GoBackSvgIcon';
import Bubble from '../components/Bubble';
import {Formik, Field} from 'formik';
import CustomInput from '../components/Input';
import * as yup from 'yup';

type Screen1NavigationProps = NativeStackScreenProps<RootStackParamList>;

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const Screen1: React.FC<Screen1NavigationProps> = ({navigation}) => {
  return (
    <Screen>
      <ScrollView>
        <Header
          title="Screen1"
          rightElements={
            <IconButton
              size="small"
              onClick={() => Alert.alert('Right Element Icon Button')}>
              <GoBackSvgIcon />
            </IconButton>
          }
        />
        <Content>
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar="https://images.unsplash.com/photo-1652669253736-1e815c884373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            lastMessageText={"Hay🐶. What's up"}
            lastMessageDate="12.35"
            unreadMessages={0}
          />
          <Dialog
            dialogName="Vladislav Kravchuk"
            avatar={null}
            lastMessageText={'Hello world 👋'}
            lastMessageDate="12.45"
            unreadMessages={12}
          />
          <Button onClick={() => navigation.navigate('Screen2')}>
            Screen 2
          </Button>
          <Button onClick={() => Alert.alert('Outline Button')} outline>
            Outline Button
          </Button>
          <Button onClick={() => Alert.alert('Disable Button')} disabled>
            Disable Button
          </Button>
          <IconButton
            onClick={() => Alert.alert('Small Icon Button')}
            size="small">
            <GoBackSvgIcon />
          </IconButton>
          <IconButton onClick={() => Alert.alert('Icon Button')}>
            <GoBackSvgIcon />
          </IconButton>
          <Bubble
            fullName="Roman Dusko"
            avatar={null}
            text="Hello world"
            date="12:34"
          />
          <Bubble
            isMe
            fullName="Roman Dusko"
            avatar={null}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nam nihil quod repellendus sunt voluptas! Blanditiis dignissimos enim facere fugiat harum id inventore minus officia, perferendis porro praesentium, quia quidem!"
            date="12:34"
          />
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => console.log(values)}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="Full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                />

                <Button
                  onClick={handleSubmit}
                  disabled={!isValid || values.email === ''}>
                  SignUp
                </Button>
              </>
            )}
          </Formik>
        </Content>
      </ScrollView>
    </Screen>
  );
};

export default Screen1;
