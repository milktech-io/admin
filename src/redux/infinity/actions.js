
import { infinityApi } from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';


///plan
export const getPlansAsync = (params) => async (dispatch) => {
    const response = await infinityApi.get(params);
    dispatch(types.getPlans(response.data.data))
}


export const getPlanAsync = (id) => async (dispatch) => {
    const response = await infinityApi.show(id);
    dispatch(types.getPlan(response.data.data))
}


export const savePlanAsync = (data) => async (dispatch,state) => {
    const response = await infinityApi.save(data);
    toast.success('Plan guardado correctamente', {"theme":'dark'})
    const plans = JSON.parse(JSON.stringify(state().multiplier.plans))

    plans.data.push(response.data.data);
    dispatch(types.getPlans(plans))
}


export const updatePlanImageAsync = (id, image) => async (dispatch) => {
    toast.info("Subiendo imagen",{"theme":"dark"})
    const response = await infinityApi.updateImage(id,image);
  
    toast.success("Imagen actualizada corectamente",{"theme":"dark"})
    dispatch(types.getPlan(response.data.data))
}
