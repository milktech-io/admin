import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    translations:[],
    translation:{},

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getTranslations, (state, action) => {
      state.translations = action.payload;
    })      
    .addCase(types.getTranslation, (state, action) => {
      state.translation = action.payload;
    })  
});