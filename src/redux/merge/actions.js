
import { mergeApi} from '../../api';
import types from './actionTypes';

export const getMergesAsync = (user_id, params) => async (dispatch) => {
    const response = await mergeApi.get(user_id, params)
    dispatch(types.setMerges(response.data.data));

}
