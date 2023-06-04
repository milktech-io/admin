import {blockchainApi} from '../../api';
import types from './actionTypes';


export const getSwapAsync = (params) => async (dispatch) => {
    const response = await blockchainApi.swap(params);
    dispatch(types.getSwap(response.data.data))
}

export const getTransactionsAsync = (params) => async (dispatch) => {
    const response = await blockchainApi.transactions(params);
    dispatch(types.getTransactions(response.data.data))
}

export const getPurchasesAsync = (params) => async (dispatch) => {
    const response = await blockchainApi.purchases(params);
    dispatch(types.getPurchases(response.data.data))
}

