import {createAction} from '@reduxjs/toolkit';

export const createActionTypes = (action: string) => ({
  REQUEST: `${action.toUpperCase()}_REQUEST`,
  SUCCESS: `${action.toUpperCase()}_SUCCESS`,
  FAILURE: `${action.toUpperCase()}_FAILURE`,
});

export const createApiActions = <R = any, S = any, F = any>(
  actionTypes: ReturnType<typeof createActionTypes>,
) => ({
  request: createAction<R>(actionTypes.REQUEST),
  success: createAction<S>(actionTypes.SUCCESS),
  failure: createAction<F>(actionTypes.FAILURE),
});

export type createActionTypes = typeof createActionTypes;
export type createApiActions = typeof createApiActions;
