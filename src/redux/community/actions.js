import {voteApi, challengeApi, eventApi} from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';

export const getVotesAsync = (params) => async (dispatch) => {
    const response = await voteApi.get(params);
    dispatch(types.getVotes(response.data.data))
}

export const saveVoteAsync = (params) => async (dispatch, getState) => {
    const response = await voteApi.save(params);

    let currentState = JSON.parse(JSON.stringify(getState().community.votes));

    currentState.data = [
         ...currentState.data,
         response.data.data,
    ]

    toast.success('Encuesta creada correctamente', {'theme':"dark"});
    dispatch(types.getVotes(currentState))
}



export const saveChallengeAsync = (params) => async (dispatch, getState) => {
    const response = await challengeApi.save(params);

    let currentState = JSON.parse(JSON.stringify(getState().community.challenges));

    currentState.data = [
         ...currentState.data,
         response.data.data,
    ]

    toast.success('Encuesta creada correctamente', {'theme':"dark"});
    dispatch(types.getChallenges(currentState))
}
 

export const getChallengesAsync = (params) => async (dispatch) => {
    const response = await challengeApi.get(params);
    dispatch(types.getChallenges(response.data.data))
}


export const deleteVoteAsync = (row_id) => async(dispatch, getState) => {
    await voteApi.delete(row_id);
    let currentState = JSON.parse(JSON.stringify(getState().community.votes));

    currentState.data = currentState.data.filter(row=>row.id!==row_id);

    toast.success('Encuesta eliminada correctamente', {'theme':"dark"});
    dispatch(types.getVotes(currentState))
}

export const deleteChallengeAsync = (row_id) => async(dispatch, getState) => {
    await challengeApi.delete(row_id);
    let currentState = JSON.parse(JSON.stringify(getState().community.challenges));

    currentState.data = currentState.data.filter(row=>row.id!==row_id);

    toast.success('Encuesta eliminada correctamente', {'theme':"dark"});
    dispatch(types.getChallenges(currentState))
}

export const getEvidencesAsync = (id, params) => async (dispatch) => {
    const response = await challengeApi.evidences(id, params);
    dispatch(types.getEvidences(response.data.data))
}



export const getEventsAsync = (params) => async (dispatch) => {
    const response = await eventApi.get(params);
    dispatch(types.getEvents(response.data.data))
}


export const saveEventAsync = (params) => async (dispatch, getState) => {
    const response = await eventApi.save(params);

    let currentState = JSON.parse(JSON.stringify(getState().community.events));

    currentState.data = [
         ...currentState.data,
         response.data.data,
    ]

    toast.success('Encuesta creada correctamente', {'theme':"dark"});
    dispatch(types.getEvents(currentState))
}

export const deleteEventAsync = (row_id) => async(dispatch, getState) => {
    await eventApi.delete(row_id);
    let currentState = JSON.parse(JSON.stringify(getState().community.events));

    currentState.data = currentState.data.filter(row=>row.id!==row_id);

    toast.success('Noticia eliminada correctamente', {'theme':"dark"});
    dispatch(types.getEvents(currentState))
}
