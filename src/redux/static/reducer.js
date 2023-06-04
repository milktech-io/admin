import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    statics:[],
    variants:[],
    variant:{},
    settings:[],
    discounts:[],
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getStatics, (state, action) => {
      state.statics = action.payload;
    })  
    .addCase(types.getVariants, (state, action) => {
      state.variants = action.payload;
    })  
    .addCase(types.getVariant, (state, action) => {
      state.variant = action.payload;
    })     
    .addCase(types.getSettings, (state, action) => {
      state.settings = action.payload;
    })     
    .addCase(types.getDiscounts, (state, action) => {
      state.discounts = action.payload;
    }) 
});