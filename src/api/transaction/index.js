import {authAxios} from './../../config/axios';

class Transactions{	
	get=(params=[])=>{
		return authAxios.get(`transactions`,{
			params
		});
	}

}

export default (new Transactions());
