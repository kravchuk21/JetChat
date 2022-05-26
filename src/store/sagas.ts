import {all} from 'redux-saga/effects';
import {authWatcher} from './auth';

function* rootSaga() {
  yield all([authWatcher()]);
}

export default rootSaga;
