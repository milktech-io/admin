
import {categoryApi} from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';

export const getCategoriesAsync = (params) => async (dispatch) => {    
    const response = await categoryApi.get(params);
    dispatch(types.getCategories(response.data.data));
}


export const saveCategorieAsync=(data) => async (dispatch,getState) => {
    const response = await categoryApi.save(data);

    let currentState = JSON.parse(JSON.stringify(getState().category.categories));

    currentState.data = [
         ...currentState.data,
         response.data.data,
    ]

    dispatch(types.getCategories(currentState));
    toast.success("Categoria guardada correctamente", {"theme":"dark"})
}


export const updateImageAsync=(id, data) => async (dispatch,getState) => {
    const response = await categoryApi.updateImage(id, data);

    let currentState = JSON.parse(JSON.stringify(getState().category.categories));

    currentState.data = currentState.data.map((cat)=>{
        if (cat.id===id) {
            return response.data.data
        }

        return cat;
    })

    dispatch(types.getCategories(currentState));
    toast.success("Categoria guardada correctamente", {"theme":"dark"})
}



export const deleteCategoryAsync=(id) => async (dispatch,getState) => {
    const response = await categoryApi.delete(id);

    let currentState = JSON.parse(JSON.stringify(getState().category.categories));

    currentState.data = currentState.data.filter(row=>row.id!==id);

    dispatch(types.getCategories(currentState));
    toast.success("Categoria guardada correctamente", {"theme":"dark"})
    return response;
}

export const updateCategorieAsync=(id,data) => async (_dispatch,_getState) => {
    console.log(id,data);
    const response = await categoryApi.update(id,data);
    toast.success("Categoria guardada correctamente", {"theme":"dark"})
    return response;
}

