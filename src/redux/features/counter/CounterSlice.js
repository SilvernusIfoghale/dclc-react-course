import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    // incrementAmount: (state, action) => {
    //   state.count += action.payload;
    // },
    incrementAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementAmount } =
  CounterSlice.actions;
export const countState = (state) => state.counter.count;
export default CounterSlice.reducer;
