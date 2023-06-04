
import {transactionApi} from '../../api';
import types from './actionTypes';

export const getTransactionsAsync = (params) => async (dispatch) => {
    const response = await transactionApi.get(params)
    dispatch(types.getTransactions(response.data.data));
}
