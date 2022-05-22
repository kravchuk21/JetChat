import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Пожалуйста, введите действительный адрес электронной почты')
    .required('Электронная почта обязательна'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Пароль должен быть с маленькой буквы')
    .matches(/\w*[A-Z]\w*/, 'Пароль должен быть с заглавной буквы')
    .matches(/\d/, 'Пароль должен иметь число')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Пароль должен содержать специальный символ',
    )
    .min(8, ({min}) => `Пароль должен быть не менее ${min} символов`)
    .required('Необходим пароль'),
});
