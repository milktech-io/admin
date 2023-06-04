import {newlandApi} from '../../../api';
import types from '../actionTypes';
import {toast} from 'react-toastify';


export const getNewlandAsync = (params) => async (dispatch) => {
    const response = await newlandApi.get(params);
    dispatch(types.getNewland(response.data.data))
}

export const updateStockImageAsync = (id, image) => async (dispatch) => {
    toast.info("Subiendo imagen",{"theme":"dark"})
    const response = await newlandApi.updateImage(id,image);
  
    toast.success("Imagen actualizada corectamente",{"theme":"dark"})
    dispatch(types.getNewlandStock(response.data.data))
}

export const getStockAsync = (id) => async (dispatch) => {
    const response = await newlandApi.show(id);
    dispatch(types.getNewlandStock(response.data.data))
}


export const getTokensCompletedAsync = (id) => async (dispatch) => {
    const response = await newlandApi.completed(id);
    dispatch(types.getNewlandCompleted(response.data.data))
}


export const getTokensPendingAsync = (id) => async (dispatch) => {
    const response = await newlandApi.pending(id);
    dispatch(types.getNewlandPending(response.data.data))
}


export const uploadNewlandFinancialAsync = (id, image) => async (dispatch,getState) => {
    toast.info("Subiendo documento",{"theme":"dark"})
    let response = await newlandApi.uploadFinancial(id,image);
    response.data.data.status ='No enviado';
    let data = JSON.parse(JSON.stringify(getState().product.newland.financial));
    data.data.unshift(response.data.data);

    dispatch(types.getNewlandFinancial(data))

    toast.success("documento subido corectamente",{"theme":"dark"})
}

export const getNewlandFinancialAsync = (id, params) => async (dispatch) => {
    const response = await newlandApi.getFinancial(id, params);
    dispatch(types.getNewlandFinancial(response.data.data))
}

export const getNewlandFinancialDetailAsync = (id, params) => async (dispatch) => {
    const response = await newlandApi.getFinancialDetail(id, params);
    dispatch(types.getNewlandFinancialDetail(response.data.data))
}

export const sendNewlandFinancialAsync = (id) => async (dispatch, getState) => {
    await newlandApi.sendFinancial(id);

    let data = JSON.parse(JSON.stringify(getState().product.newland.financial));

    data.data = data.data.map(function(row) {
        if(row.id ===id) {
            row.status='Enviado';
        }
        return row;
    })

    dispatch(types.getNewlandFinancial(data))
}