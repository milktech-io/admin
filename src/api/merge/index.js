import {authAxios} from './../../config/axios';

class Merges{
	get=(user_id, params=[])=>{
		return authAxios.get(`merges/${user_id}/user`,{
			params
		});
	}
}

export default (new Merges());
