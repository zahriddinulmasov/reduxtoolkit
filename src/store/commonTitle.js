import { createSlice } from "@reduxjs/toolkit";

const name = "common";

const initialState = {
  titleState: "Overview",
  error: null,
  users: []
};

export const { reducer: headerTitleReducer, actions: headerTitleActions } =
  createSlice({
    name,
    initialState,
    reducers: {
      changeHeaderTitle(state, action) {
        state.titleState = action.payload;
      },
      setUsers(state, action){
      state.users= action.payload}
    },
  });
