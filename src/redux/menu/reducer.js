import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    user:false,

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getUsers, (state, action) => {
      state.users = action.payload;
    })

});