import {withdrawApi} from '../../api';
import types from './actionTypes';


export const getWithdrawsAsync = (params) => async (dispatch) => {
    const response = await withdrawApi.get(params);
    dispatch(types.getWithdraws(response.data.data))
}


