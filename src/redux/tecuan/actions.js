import {tecuanApi} from '../../api';
import types from './actionTypes';
import thunks from './actionThunks';

export const getUsersTokenAsync = (page) => async (dispatch) => {
    const response = await tecuanApi.get(page);
    const data = response.data.data;
    dispatch(types.getUsersToken(data));
};


export const postTokensIdAsync = thunks.postTokensIdAsync;