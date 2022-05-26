import {LoadingEnum} from '../types';

export type InitialStateType = {
  email: string | null;
  isActivated: boolean | null;
  id: string | null;
  isAuth: boolean;
  isLoading: LoadingEnum;
};
