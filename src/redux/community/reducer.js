import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
  votes:[],
  challenges:[],
  evidences:[],
  events:[]
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getVotes, (state, action) => {
      state.votes = action.payload;
    })  
    .addCase(types.getChallenges, (state, action) => {
      state.challenges = action.payload;
    }) 

    .addCase(types.getEvidences, (state, action) => {
      state.evidences = action.payload;
    })     

    .addCase(types.getEvents, (state, action) => {
      state.events = action.payload;
    }) 
});