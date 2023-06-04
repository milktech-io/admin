import {languageApi} from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';

export const getTranslationsAsync = (params) => async (dispatch) => {    
    const response = await languageApi.get(params);
    
    dispatch(types.getTranslations(response.data.data));
}


export const getTranslationAsync = (id) => async (dispatch) => {    
    const response = await languageApi.show(id);
    
    dispatch(types.getTranslation(response.data.data));
}

export const saveTranslationAsync = (params) => async (dispatch, getState) => {    
    const response = await languageApi.save(params);

    let currentState = JSON.parse(JSON.stringify(getState().translation.translations));
    
    currentState.data = [
         ...currentState.data,
        response.data.data,
    ]

    dispatch(types.getTranslations(currentState));
}

export const updateTranslationAsync = (id, params) => async (dispatch) => {
    await languageApi.update(id, params);
    dispatch(types.getTranslation(params['json']));
    toast.success("Traduccion actualizada correctamente", {"theme":"dark"})

}

export const deleteTranslationAsync=(id) => async (dispatch,getState) => {
    await languageApi.delete(id);

    let currentState = JSON.parse(JSON.stringify(getState().translation.translations));

    currentState.data = currentState.data.filter(row=>row.id!==id);

    dispatch(types.getTranslations(currentState));
    toast.success("Traduccion eliminada correctamente", {"theme":"dark"})
}
