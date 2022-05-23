import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IncrementByAmountPayloadType} from './types';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (
      state,
      action: PayloadAction<IncrementByAmountPayloadType>,
    ) => {
      state.value += action.payload.count;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
