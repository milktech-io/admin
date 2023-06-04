import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    ranges:[],
    directBonds:[],
    prizes:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getRanges, (state, action) => {
      state.ranges = action.payload;
    })      

    .addCase(types.getDirectBonds, (state, action) => {
      state.directBonds = action.payload;
    })      

    .addCase(types.getPrizes, (state, action) => {
      state.prizes = action.payload;
    })  
});