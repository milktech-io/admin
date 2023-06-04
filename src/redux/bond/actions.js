import {bondApi} from '../../api';
import types from './actionTypes';



export const getPackageAsync = (params) => async (dispatch) => {
    const response = await bondApi.multiplierPackage(params);
    console.log('res', response);

    if(params['status']==='Pendiente') {
        dispatch(types.multiplier.package.getPending(response.data.data))
    } else if (params['status']==='Completado') {
        dispatch(types.multiplier.package.getCompleted(response.data.data))
    }
}

export const getLoopAsync = (params) => async (dispatch) => {
    const response = await bondApi.multiplierLoop(params);
    console.log('res', response);

    if(params['status']==='Pendiente') {
        dispatch(types.multiplier.loop.getPending(response.data.data))
    } else if (params['status']==='Completado') {
        dispatch(types.multiplier.loop.getCompleted(response.data.data))
    }
}


export const getRangeAsync = (params) => async (dispatch) => {
    const response = await bondApi.multiplierLoop(params);
    console.log('res', response);

    if(params['status']==='Pendiente') {
        dispatch(types.multiplier.range.getPending(response.data.data))
    } else if (params['status']==='Completado') {
        dispatch(types.multiplier.range.getCompleted(response.data.data))
    }
}


