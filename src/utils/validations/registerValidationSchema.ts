import * as yup from 'yup';
import {loginValidationSchema} from './loginValidationSchema';

export const registerValidationSchema = loginValidationSchema.shape({
  fullName: yup
    .string()
    .matches(/^([\w]{2,})+\s+([\w\s]{2,})+$/i, 'Введите фамилию и имя')
    .required('Укажите полное имя'),
});
