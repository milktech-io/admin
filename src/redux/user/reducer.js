import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    users:[],
    trash:[],

}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.setUsers, (state, action) => {
      state.users = action.payload;
    }) 
        .addCase(types.setTrash, (state, action) => {
      state.trash = action.payload;
    })  
 
});