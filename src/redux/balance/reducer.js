import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    balances:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.setBalances, (state, action) => {
      state.balances = action.payload;
    })  
});