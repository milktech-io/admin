import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    documents:[],
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getDocuments,(state, action) => {
      state.documents = action.payload;
    })
});