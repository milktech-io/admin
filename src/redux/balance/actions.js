
import {packageApi} from '../../api';
import types from './actionTypes';

export const getBalancesAsync = (user_id, params) => async (dispatch) => {
    const response = await packageApi.balancesUser(user_id, params)
    dispatch(types.setBalances(response.data.data));

}
