import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    swap:[],
    transactions:[],
    purchases:[],
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getSwap, (state, action) => {
      state.swap = action.payload;
    })  
    .addCase(types.getTransactions, (state, action) => {
      state.transactions = action.payload;
    }) 
    .addCase(types.getPurchases, (state, action) => {
      state.purchases = action.payload;
    })  
});