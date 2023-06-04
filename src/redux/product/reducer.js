import {  createReducer } from "@reduxjs/toolkit";
import types from './actionTypes';

const initialState = {
    products:[],
    reviews:[],
    versions:[],
    documents:[],
    product:{},

    newland:{
      stocks:[],
      stock:{},
      pending:[],
      completed:[],
      financial:[],
      financialDetail:[],
    },


    chaincrop:{
      stocks:[],
      stock:{},
      pending:[],
      completed:[],
      financial:[],
      financialDetail:[],
    },
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.getProducts, (state, action) => {
      state.products = action.payload;
    })  
    .addCase(types.getReviews, (state, action) => {
      state.reviews = action.payload;
    }) 
    .addCase(types.getVersions, (state, action) => {
      state.versions = action.payload;
    })  
    .addCase(types.getDocuments,(state, action) => {
      state.documents = action.payload;
    })
    .addCase(types.getProduct,(state, action) => {
      state.product = action.payload;
    })

    //newland
    .addCase(types.getNewland,(state, action) => {
      state.newland.stocks = action.payload;
    })
    .addCase(types.getNewlandStock,(state, action) => {
      state.newland.stock = action.payload;
    })
    .addCase(types.getNewlandCompleted,(state, action) => {
      state.newland.completed = action.payload;
    })
    .addCase(types.getNewlandPending,(state, action) => {
      state.newland.pending = action.payload;
    })
    .addCase(types.getNewlandFinancial,(state, action) => {
      state.newland.financial = action.payload;
    })    
    .addCase(types.getNewlandFinancialDetail,(state, action) => {
      state.newland.financialDetail = action.payload;
    })


    //chaincrop
    .addCase(types.getChaincrop,(state, action) => {
      state.chaincrop.stocks = action.payload;
    })
    .addCase(types.getChaincropStock,(state, action) => {
      state.chaincrop.stock = action.payload;
    })
    .addCase(types.getChaincropCompleted,(state, action) => {
      state.chaincrop.completed = action.payload;
    })
    .addCase(types.getChaincropPending,(state, action) => {
      state.chaincrop.pending = action.payload;
    })
    .addCase(types.getChaincropFinancial,(state, action) => {
      state.chaincrop.financial = action.payload;
    })    
    .addCase(types.getChaincropFinancialDetail,(state, action) => {
      state.chaincrop.financialDetail = action.payload;
    })
});