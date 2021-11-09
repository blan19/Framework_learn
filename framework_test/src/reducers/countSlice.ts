import {createSlice} from '@reduxjs/toolkit';

export interface CountState {
  count: number,
}

const initialState : CountState = {
  count: 0
}

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.count+=1
    },
    decrease: (state) => {
      state.count-=1
    },
    reset: (state) => {
      state.count = 0
    }
  }
})

export const {increase, decrease, reset} = countSlice.actions;
export default countSlice.reducer;