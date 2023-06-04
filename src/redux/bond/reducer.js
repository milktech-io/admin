import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    multiplier : {
      package:{
        pending:[],
        completed:[],
      },
      loop:{
        pending:[],
        completed:[],
      },
      range:{
        pending:[],
        completed:[],
      }
    }
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.multiplier.package.getPending, (state, action) => {
      state.multiplier.package.pending = action.payload;
    })  
    .addCase(types.multiplier.package.getCompleted, (state, action) => {
      state.multiplier.package.completed = action.payload;
    }) 

    .addCase(types.multiplier.loop.getPending, (state, action) => {
      state.multiplier.loop.pending = action.payload;
    })  
    .addCase(types.multiplier.loop.getCompleted, (state, action) => {
      state.multiplier.loop.completed = action.payload;
    }) 
 
    .addCase(types.multiplier.range.getPending, (state, action) => {
      state.multiplier.range.pending = action.payload;
    })  
    .addCase(types.multiplier.range.getCompleted, (state, action) => {
      state.multiplier.range.completed = action.payload;
    }) 
 

});