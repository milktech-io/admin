
import {rangeApi} from '../../api';
import types from './actionTypes';

export const getRangesAsync = (params) => async (dispatch) => {
    const response = await rangeApi.get(params)
    dispatch(types.getRanges(response.data.data));
}

export const getDirectBondsAsync = (params) => async (dispatch) => {
    const response = await rangeApi.directBonds(params)
    dispatch(types.getDirectBonds(response.data.data));
}

export const editDirectBondAsync = (data) => async (dispatch, getState) => {
    
    let currentState = JSON.parse(JSON.stringify(getState().range.directBonds));

    currentState.data = currentState.data.map(bond=>bond.id===data.id?data:bond)
    dispatch(types.getDirectBonds(currentState));
}

export const getPrizesAsync = (params) => async (dispatch) => {
    const response = await rangeApi.getPrizes(params)
    dispatch(types.getPrizes(response.data.data));
}

export const editPrizeAsync = (data) => async (dispatch, getState) => {
    
    let currentState = JSON.parse(JSON.stringify(getState().range.prizes));

    currentState.data = currentState.data.map(prize=>prize.code===data.code?data:prize)
    dispatch(types.getPrizes(currentState));
}
