import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    withdraws:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getWithdraws, (state, action) => {
      state.withdraws = action.payload;
    })  

});