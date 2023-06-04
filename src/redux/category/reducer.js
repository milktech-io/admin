import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    categories:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getCategories, (state, action) => {
      state.categories = action.payload;
    })  
});