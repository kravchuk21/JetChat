import Axios from '../index';
import {
  ActivateEmailData,
  AuthResponseData,
  LoginData,
  RegistrationData,
} from './types';

export const AuthApi = {
  register: (data: RegistrationData): Promise<AuthResponseData> => {
    return Axios.post<AuthResponseData>('/registration', data).then(res => {
      return res.data;
    });
  },
  login: (data: LoginData): Promise<AuthResponseData> => {
    return Axios.post<AuthResponseData>('/login', data).then(res => {
      return res.data;
    });
  },
  activateEmail: (data: ActivateEmailData) => {
    return Axios.post('/activate', data).then(res => res.data);
  },
  logout: (): Promise<any> => {
    return Axios.post('/logout').then(res => {
      return res.data;
    });
  },
  refresh: (): Promise<AuthResponseData> => {
    return Axios.get<AuthResponseData>('/refresh').then(res => {
      return res.data;
    });
  },
};
