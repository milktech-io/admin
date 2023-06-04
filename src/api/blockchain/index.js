import {authAxios} from './../../config/axios';

class Blockchain{	
	swap=(params=[])=>{
		return authAxios.get(`blockchain/swap`,{
			params
		});
	}	

	transactions=(params=[])=>{
		return authAxios.get(`blockchain/transactions`,{
			params
		});
	}

	purchases=(params=[])=>{
		return authAxios.get(`blockchain/purchases`,{
			params
		});
	}	
}

export default (new Blockchain());
