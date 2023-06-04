import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    purchases:[],
    purchase:{},
    balance:[]



}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getPurchases, (state, action) => {
      state.purchases = action.payload;
    })  
    .addCase(types.getPurchase, (state, action) => {
      state.purchase = action.payload;
    })  
    .addCase(types.getBalanceHistory, (state, action) => {
      state.balance = action.payload;
    })      
});