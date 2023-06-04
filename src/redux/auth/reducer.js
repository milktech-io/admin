import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    user:false,

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.login, (state, action) => {
      state.user = action.payload;
    })
});