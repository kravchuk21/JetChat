import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthResponseData} from './authApi/types';
import {API_URL} from '@env';

const Axios = axios.create({
  baseURL: API_URL || 'http://192.168.198.197:5000/api',
  withCredentials: true,
});

Axios.defaults.headers.common.Authorization = `Bearer ${AsyncStorage.getItem(
  'token',
)}`;

Axios.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponseData>('/refresh', {
          withCredentials: true,
        });
        await AsyncStorage.setItem('token', response.data.data.accessToken);
        return Axios.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  },
);

export default Axios;
