import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    roles:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.setRoles, (state, action) => {
      state.roles = action.payload;
    })

});