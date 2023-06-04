import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';
import thunks from './actionThunks';

const initialState = {
  usersToken: [],
  linkSucces: false,
  linkError: false,
  messageError: [],
  link: [],
};


export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getUsersToken, (state, action) => {
      state.usersToken = action.payload;
    })
    .addCase(types.resetState, (state) => {
      state.linkError = false;
      state.linkSucces = false;
    })
    .addCase(thunks.postTokensIdAsync.fulfilled, (state, action) => {
      state.link = action.payload;
      state.linkSucces = true;
      state.linkError = false;
    })
    .addCase(thunks.postTokensIdAsync.rejected, (state, _action) => {
      state.linkError = true;
    });
});