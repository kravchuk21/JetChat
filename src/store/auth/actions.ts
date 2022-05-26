import {
  ActivateEmailData,
  AuthResponseData,
  LoginData,
  RegistrationData,
} from '../../api/authApi/types';
import {createActionTypes, createApiActions} from '../actions';

import {Empty} from '../types';

export const signInAction = createApiActions<
  LoginData,
  AuthResponseData,
  Empty
>(createActionTypes('AUTH/SIGNING'));

export const registerAction = createApiActions<RegistrationData, Empty, Empty>(
  createActionTypes('AUTH/REGISTER'),
);

export const activateEmailAction = createApiActions<
  ActivateEmailData,
  Empty,
  Empty
>(createActionTypes('AUTH/ACTIVATE_EMAIL'));

export const logOutAction = createApiActions(createActionTypes('AUTH/LOGOUT'));

export const checkAuthAction = createApiActions<Empty, AuthResponseData, Empty>(
  createActionTypes('AUTH/CHECK_AUTH'),
);
