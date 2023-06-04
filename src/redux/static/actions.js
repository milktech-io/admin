
import {productApi, staticApi, collectiveApi } from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';




///productos
export const getStaticsAsync = (params={}) => async (dispatch) => {
    params['static']=1;
    const response = await productApi.get(params);
    dispatch(types.getStatics(response.data.data))
}


///variant
export const getVariantsAsync = (params) => async (dispatch) => {
    const response = await staticApi.get(params);
    dispatch(types.getVariants(response.data.data))
}


export const getVariantAsync = (id) => async (dispatch) => {
    const response = await staticApi.show(id);
    dispatch(types.getVariant(response.data.data))
}


export const saveVariantAsync = (data) => async (dispatch,state) => {
    data['additional_information']='{}';
    const response = await staticApi.save(data);
    toast.success('variant guardado correctamente', {"theme":'dark'})
    const variants = JSON.parse(JSON.stringify(state().staticProduct.variants))

    variants.data.push(response.data.data);
    dispatch(types.getVariants(variants))
}


export const saveStaticAsync = (data) => async (dispatch, state) =>{
    data['static']=1;
    data['variant']="App\\Models\\Static\\StaticProducts"
    data['multiplier']=0;
    const response = await productApi.save(data);
    toast.success("Producto guardado correctamente", {"theme":'dark'})

    let statics = JSON.parse(JSON.stringify(state().staticProduct.statics))
    statics.data.push(response.data.data);
    dispatch(types.getStatics(statics))

}

export const saveColectiveAsync = (data) => async (dispatch, state) =>{
    data['static']=1;
    data['slug']='collective';
    data['variant']="App\\Models\\Static\\StaticProducts"
    data['multiplier']=0;
    const response = await productApi.save(data);
    toast.success("Producto guardado correctamente", {"theme":'dark'})

    let statics = JSON.parse(JSON.stringify(state().staticProduct.statics))
    statics.data.push(response.data.data);
    dispatch(types.getStatics(statics))

}


export const saveConfigAsync = (data) => async (dispatch, state) =>{
    const response = await collectiveApi.save(data);
    toast.success("Configuracion guardada correctamente", {"theme":'dark'})

    let settings = JSON.parse(JSON.stringify(state().staticProduct.settings))
    settings.data.push(response.data.data);

    dispatch(types.getSettings(settings))

}

export const getSettingsAsync = (params={}) => async (dispatch) => {
    const response = await collectiveApi.get(params);
    dispatch(types.getSettings(response.data.data))
}


export const deleteSettingsAsync = (row_id) => async(dispatch, getState) => {
    await collectiveApi.delete(row_id);
    let currentState = JSON.parse(JSON.stringify(getState().staticProduct.settings));

    currentState.data = currentState.data.filter(row=>row.id!==row_id);

    toast.success('Configuracion eliminada correctamente', {'theme':"dark"});
    dispatch(types.getSettings(currentState))
}

//discounts

export const getDiscountsAsync = (params={}) => async (dispatch) => {
    const response = await collectiveApi.getDiscounts(params);
    dispatch(types.getDiscounts(response.data.data))
}


export const saveDiscountAsync = (data) => async (dispatch, state) =>{
    const response = await collectiveApi.saveDiscount(data);
    toast.success("Configuracion guardada correctamente", {"theme":'dark'})

    let discounts = JSON.parse(JSON.stringify(state().staticProduct.discounts))
    discounts.data.push(response.data.data);

    dispatch(types.getDiscounts(discounts))

}
export const deleteDiscountAsync = (row_id) => async(dispatch, getState) => {
    await collectiveApi.deleteDiscount(row_id);
    let currentState = JSON.parse(JSON.stringify(getState().staticProduct.discounts));

    currentState.data = currentState.data.filter(row=>row.id!==row_id);

    toast.success('Configuracion eliminada correctamente', {'theme':"dark"});
    dispatch(types.getDiscounts(currentState))
}
