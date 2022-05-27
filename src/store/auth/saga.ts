import {takeLatest, put} from '@redux-saga/core/effects';
import {AuthResponseData} from '../../api/authApi/types';
import {AuthApi} from '../../api/authApi';
import {
  activateEmailAction,
  checkAuthAction,
  logOutAction,
  registerAction,
  signInAction,
} from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowToast} from '../../utils/helpers/TostMessage';

function* signInWorker({payload}: ReturnType<typeof signInAction['request']>) {
  try {
    const response: AuthResponseData = yield AuthApi.login(payload);
    yield AsyncStorage.setItem('token', response.data.accessToken);
    yield put(signInAction.success(response));
    ShowToast({type: 'success', text1: 'Вход', text2: response.message});
  } catch (e: any) {
    yield put(signInAction.failure({}));
    ShowToast({text1: 'Ошибка входа', text2: e.response.data.message});
  }
}

function* registerWorker({
  payload,
}: ReturnType<typeof registerAction['request']>) {
  try {
    const response: AuthResponseData = yield AuthApi.register(payload);
    yield AsyncStorage.setItem('token', response.data.accessToken);
    yield put(registerAction.success({}));
    ShowToast({
      type: 'success',
      text1: 'Регистрация',
      text2: response.message,
    });
  } catch (e: any) {
    yield put(registerAction.failure({}));
    ShowToast({text1: 'Ошибка регистрации', text2: e.response.data.message});
  }
}

function* logOutWorker() {
  try {
    const response: AuthResponseData = yield AuthApi.logout();
    yield AsyncStorage.removeItem('token');
    yield put(logOutAction.success({}));
    ShowToast({type: 'success', text1: 'Выход', text2: response.message});
  } catch (e: any) {
    yield put(logOutAction.failure({}));
    ShowToast({text1: 'Ошибка выхода', text2: e.response.data.message});
  }
}

function* activateEmailWorker({
  payload,
}: ReturnType<typeof activateEmailAction['request']>) {
  try {
    const response: AuthResponseData = yield AuthApi.activateEmail(payload);
    yield put(activateEmailAction.success({}));
    ShowToast({type: 'success', text1: 'Выход', text2: response.message});
  } catch (e: any) {
    yield put(activateEmailAction.failure({}));
    ShowToast({text1: 'Ошибка активации', text2: e.response.data.message});
  }
}

function* checkAuthWorker() {
  try {
    const response: AuthResponseData = yield AuthApi.refresh();
    yield AsyncStorage.setItem('token', response.data.accessToken);
    yield put(checkAuthAction.success(response));
  } catch (e: any) {
    yield put(checkAuthAction.failure({}));
  }
}

export function* authWatcher() {
  yield takeLatest(signInAction.request.type, signInWorker);
  yield takeLatest(registerAction.request.type, registerWorker);
  yield takeLatest(logOutAction.request.type, logOutWorker);
  yield takeLatest(activateEmailAction.request.type, activateEmailWorker);
  yield takeLatest(checkAuthAction.request.type, checkAuthWorker);
}
