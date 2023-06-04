import {productApi,reviewApi, versionApi, galleryApi} from '../../../api';
import types from '../actionTypes';
import {toast} from 'react-toastify';


//review
export const getReviewsAsync = (id,params) => async (dispatch) => {
    const response = await reviewApi.get(id,params);
    dispatch(types.getReviews(response.data.data))
}

export const changeHiddenReviewAsync = (id) =>async(dispatch,state)=>{
    const response = await reviewApi.hidden(id);
    let reviews = JSON.parse(JSON.stringify(state().product.reviews));
    reviews.data = reviews.data.map(review=>{
        if(review.id===id)
            return response.data.data;
        return review;
    })
    dispatch(types.getReviews(reviews));
}

//versions
export const getVersionsAsync = (id,params) => async (dispatch) => {
    const response = await versionApi.get(id,params);
    dispatch(types.getVersions(response.data.data))
}



export const saveVersionAsync = (data)=> async (dispatch,state) =>{
    
    const response = await versionApi.save(data);
    toast.success('Creada correctamente',{"theme":"dark"})

    let {versions} = JSON.parse(JSON.stringify(state().product));

    versions.data.push(response.data.data)

    dispatch(types.getVersions(versions));
}


export const deleteVersionAsync = (id)=> async (dispatch,state) =>{
    
    const response = await versionApi.delete(id);
    toast.success('Eliminado correctamente',{"theme":"dark"})

    let {versions} = JSON.parse(JSON.stringify(state().product));

    versions.data = versions.data.filter(version=>version.id!==id)

    dispatch(types.getVersions(versions));

    return response;
}


///documents

export const getDocumentsAsync = (id,params) => async (dispatch) => {
    const response = await productApi.document.get(id,params);
    dispatch(types.getDocuments(response.data.data))
}

export const saveDocumentAsync = (data)=> async (dispatch,state) =>{
    toast.info('Subiendo...',{"theme":"dark"})
    const response = await productApi.document.save(data);
    toast.success('Creada correctamente',{"theme":"dark"})

    let documents = JSON.parse(JSON.stringify(state().product.documents));

    documents.data.push(response.data.data)

    dispatch(types.getDocuments(documents));
}

export const deleteDocumentAsync = (id)=> async (dispatch,state) =>{
    const response = await productApi.document.delete(id);
    toast.success('Eliminado correctamente',{"theme":"dark"})

    let documents = JSON.parse(JSON.stringify(state().product.documents));

    documents.data= documents.data.filter(doc=>doc.id!==id)

    dispatch(types.getDocuments(documents));

    return response;
}




//gallery


export const deleteGalleryAsync = (id,type)=> async (dispatch,state) =>{
    const response = await galleryApi.delete(id);
    toast.success('Eliminado correctamente',{"theme":"dark"})

    let product = JSON.parse(JSON.stringify(state().product.product));
    
    product[type] = product[type].filter(image=>image.id!==id)

    dispatch(types.getProduct(product));

    return response;
}



export const saveGalleryAsync = (data,type)=> async (dispatch,state) =>{
    toast.info('Subiendo...',{"theme":"dark"})
    const response = await galleryApi.save(data);
    toast.success('Creada correctamente',{"theme":"dark"})

    let product = JSON.parse(JSON.stringify(state().product.product));

    product[type].push(response.data.data)

    dispatch(types.getProduct(product));
}
