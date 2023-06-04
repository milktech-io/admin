import {productApi } from '../../../api';
import types from '../actionTypes';
import {toast} from 'react-toastify';



///productos
export const getProductsAsync = (params) => async (dispatch) => {
    const response = await productApi.get(params);
    dispatch(types.getProducts(response.data.data))
}


export const getProductAsync = (id)=> async (dispatch) =>{
    const response = await productApi.showMore(id);
    dispatch(types.getProduct(response.data.data));
}



export const updateProductAsync = (id,data)=> async (dispatch) =>{
    const response = await productApi.update(id,data);
    toast.success('Producto actualizado correctamente', {"theme":"dark"})
    dispatch(types.getProduct(response.data.data));
}
