import {authReducer} from './auth';
import {combineReducers} from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
});
