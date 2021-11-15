import { createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  todos: {
    id: number;
    content: string;
    done: boolean;
  }[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
