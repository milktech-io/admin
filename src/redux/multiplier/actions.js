
import {productApi, planApi } from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';




///productos
export const getMultipliersAsync = (params={}) => async (dispatch) => {
    params['multiplier']=1;
    const response = await productApi.get(params);
    dispatch(types.getMultipliers(response.data.data))
}


///plan
export const getPlansAsync = (params) => async (dispatch) => {
    const response = await planApi.get(params);
    dispatch(types.getPlans(response.data.data))
}


export const getPlanAsync = (id) => async (dispatch) => {
    const response = await planApi.show(id);
    dispatch(types.getPlan(response.data.data))
}


export const savePlanAsync = (data) => async (dispatch,state) => {
    const response = await planApi.save(data);
    toast.success('Plan guardado correctamente', {"theme":'dark'})
    const plans = JSON.parse(JSON.stringify(state().multiplier.plans))

    plans.data.push(response.data.data);
    dispatch(types.getPlans(plans))
}


export const updatePlanImageAsync = (id, image) => async (dispatch) => {
    toast.info("Subiendo imagen",{"theme":"dark"})
    const response = await planApi.updateImage(id,image);
  
    toast.success("Imagen actualizada corectamente",{"theme":"dark"})
    dispatch(types.getPlan(response.data.data))
}

export const saveMultiplierAsync = (data) => async (dispatch, state) =>{
    const response = await productApi.save(data);
    toast.success("Multiplicador guardado correctamente", {"theme":'dark'})

    let multipliers = JSON.parse(JSON.stringify(state().multiplier.multipliers))
    multipliers.data.push(response.data.data);
    dispatch(types.getMultipliers(multipliers))

}