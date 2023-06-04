
import {purchaseApi, packageApi } from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';

export const getPurchasesAsync = (params={}) => async (dispatch) => {
    const response = await purchaseApi.get(params);
    dispatch(types.getPurchases(response.data.data))
}


export const getPurchaseAsync = (id) => async (dispatch) => {
    const response = await purchaseApi.show(id);
    dispatch(types.getPurchase(response.data.data))
}



export const makePurchaseFree = (data) => async (dispatch, state) => {
    const response = await purchaseApi.makePurchaseFree(data);
    toast.success('Compra generada correctamente', {"theme":"dark"});
    let purchases = state().purchase.purchases;
    purchases.data = purchases.data.push(response.data.data);
    dispatch(types.getPurchase(purchases))
}


///multiplier

export const getBalanceHistoryAsync = (package_id, params) => async  (dispatch)=>{
    const response = await packageApi.balanceHistory(package_id, params);
    dispatch(types.getBalanceHistory(response.data.data))
}