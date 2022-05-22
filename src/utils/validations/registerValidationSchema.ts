import * as yup from 'yup';
import {loginValidationSchema} from './loginValidationSchema';

export const registerValidationSchema = loginValidationSchema.shape({
  fullName: yup
    .string()
    .matches(/[\w\s.]+/, 'Введите не фамилию и имя')
    .required('Укажите полное имя'),
});
