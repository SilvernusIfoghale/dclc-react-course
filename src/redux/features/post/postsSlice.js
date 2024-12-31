import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux",
    content: "I've heard good things about Redux",
  },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;
export const postsState = (state) => state.posts;
export default postsSlice.reducer;
