import {createReducer} from '@reduxjs/toolkit';
import {InitialStateType} from './types';
import {
  activateEmailAction,
  checkAuthAction,
  logOutAction,
  registerAction,
  signInAction,
} from './actions';
import {LoadingEnum} from '../types';

const initialState: InitialStateType = {
  id: null,
  email: null,
  isActivated: null,
  isAuth: false,
  isLoading: LoadingEnum.NEVER,
};

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(signInAction.request, state => {
    state.isLoading = LoadingEnum.LOADING;
  });
  builder.addCase(signInAction.success, (state, {payload}) => {
    state.id = payload.user.id;
    state.email = payload.user.email;
    state.isActivated = payload.user.isActivated;
    state.isAuth = true;
    state.isLoading = LoadingEnum.LOADED;
  });
  builder.addCase(signInAction.failure, state => {
    state.isAuth = true;
    state.isLoading = LoadingEnum.ERROR;
  });
  builder.addCase(registerAction.request, state => ({
    ...state,
    isLoading: LoadingEnum.LOADING,
  }));
  builder.addCase(registerAction.success, state => ({
    ...state,
    isAuth: false,
    isLoading: LoadingEnum.LOADED,
  }));
  builder.addCase(registerAction.failure, state => ({
    ...state,
    isAuth: false,
    isLoading: LoadingEnum.ERROR,
  }));
  builder.addCase(logOutAction.request, state => ({
    ...state,
    isLoading: LoadingEnum.LOADING,
  }));
  builder.addCase(logOutAction.success, state => ({
    ...state,
    id: null,
    email: null,
    isActivated: null,
    isAuth: false,
    isLoading: LoadingEnum.LOADED,
  }));
  builder.addCase(logOutAction.failure, state => ({
    ...state,
    isAuth: true,
    isLoading: LoadingEnum.ERROR,
  }));
  builder.addCase(activateEmailAction.request, state => {
    state.isLoading = LoadingEnum.LOADING;
  });
  builder.addCase(activateEmailAction.success, state => {
    state.isActivated = true;
    state.isLoading = LoadingEnum.LOADED;
  });
  builder.addCase(activateEmailAction.failure, state => {
    state.isAuth = true;
    state.isActivated = false;
    state.isLoading = LoadingEnum.ERROR;
  });
  builder.addCase(checkAuthAction.request, state => {
    state.isLoading = LoadingEnum.LOADING;
  });
  builder.addCase(checkAuthAction.success, (state, {payload}) => {
    state.id = payload.user.id;
    state.email = payload.user.email;
    state.isActivated = payload.user.isActivated;
    state.isAuth = true;
    state.isLoading = LoadingEnum.LOADED;
  });
  builder.addCase(checkAuthAction.failure, state => {
    state.isAuth = false;
    state.isLoading = LoadingEnum.ERROR;
  });
});
