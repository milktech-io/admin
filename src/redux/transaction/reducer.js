import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    transactions:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getTransactions, (state, action) => {
      state.transactions = action.payload;
    })  
});