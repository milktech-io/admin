import {chaincropApi} from '../../../api';
import types from '../actionTypes';
import {toast} from 'react-toastify';


export const getChaincropAsync = (params) => async (dispatch) => {
    const response = await chaincropApi.get(params);
    dispatch(types.getChaincrop(response.data.data))
}

export const updateChaincropStockImageAsync = (id, image) => async (dispatch) => {
    toast.info("Subiendo imagen",{"theme":"dark"})
    const response = await chaincropApi.updateImage(id,image);
  
    toast.success("Imagen actualizada corectamente",{"theme":"dark"})
    dispatch(types.getChaincropStock(response.data.data))
}

export const getChaincropStockAsync = (id) => async (dispatch) => {
    const response = await chaincropApi.show(id);
    dispatch(types.getChaincropStock(response.data.data))
}


export const getChaincropTokensCompletedAsync = (id, params) => async (dispatch) => {
    const response = await chaincropApi.completed(id, params);
    dispatch(types.getChaincropCompleted(response.data.data))
}


export const getChaincropTokensPendingAsync = (id, params) => async (dispatch) => {
    const response = await chaincropApi.pending(id, params);
    dispatch(types.getChaincropPending(response.data.data))
}

export const saveChaincropFinancialAsync = (id, data) => async (dispatch,getState) => {

    let response = await chaincropApi.saveFinancial(id,data);
    let financial = JSON.parse(JSON.stringify(getState().product.chaincrop.financial));
    financial.data.unshift(response.data.data);

    dispatch(types.getChaincropFinancial(financial))

    toast.success("Registro subido corectamente",{"theme":"dark"})
}

export const getChaincropFinancialAsync = (id, params) => async (dispatch) => {
    const response = await chaincropApi.getFinancial(id, params);
    dispatch(types.getChaincropFinancial(response.data.data))
}

export const getChaincropFinancialDetailAsync = (id, params) => async (dispatch) => {
    const response = await chaincropApi.getFinancialDetail(id, params);
    dispatch(types.getChaincropFinancialDetail(response.data.data))
}

export const sendChaincropFinancialAsync = (id) => async (dispatch, getState) => {
    await chaincropApi.sendFinancial(id);

    let data = JSON.parse(JSON.stringify(getState().product.chaincrop.financial));

    data.data = data.data.map(function(row) {
        if(row.id ===id) {
            row.status='Enviado';
        }
        return row;
    })

    dispatch(types.getChaincropFinancial(data))
}