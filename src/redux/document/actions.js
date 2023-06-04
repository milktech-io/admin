
import { documentApi } from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';




///documents

export const getDocumentsAsync = (id,params) => async (dispatch) => {
    const response = await documentApi.get(id,params);
    dispatch(types.getDocuments(response.data.data))
}

export const saveDocumentAsync = (data)=> async (dispatch,state) =>{
    toast.info('Subiendo...',{"theme":"dark"})
    const response = await documentApi.save(data);
    toast.success('Creada correctamente',{"theme":"dark"})

    let documents = JSON.parse(JSON.stringify(state().product.documents));

    documents.data.push(response.data.data)

    dispatch(types.getDocuments(documents));
}

export const deleteDocumentAsync = (id)=> async (dispatch,state) =>{
    const response = await documentApi.delete(id);
    toast.success('Eliminado correctamente',{"theme":"dark"})

    let documents = JSON.parse(JSON.stringify(state().product.documents));

    documents.data= documents.data.filter(doc=>doc.id!==id)

    dispatch(types.getDocuments(documents));

    return response;
}


