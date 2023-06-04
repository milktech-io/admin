import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    multipliers:[],
    plans:[],
    plan:{},


}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getMultipliers, (state, action) => {
      state.multipliers = action.payload;
    })  
    .addCase(types.getPlans, (state, action) => {
      state.plans = action.payload;
    })  
    .addCase(types.getPlan, (state, action) => {
      state.plan = action.payload;
    }) 
});