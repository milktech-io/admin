import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    merges:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.setMerges, (state, action) => {
      state.merges = action.payload;
    })  
});