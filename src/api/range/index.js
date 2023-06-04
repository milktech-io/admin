import {authAxios} from './../../config/axios';

class Range{
	get=(params=[])=>{
		return authAxios.get(`rangues`,{
			params
		});
	}

	show =(id)=>{
		return authAxios.get(`rangues/${id}`);
	}	

	showAdvance =(user_id)=>{
		return authAxios.get(`rangue/${user_id}/advance`);
	}
	update = (id,data)=>{
		return authAxios.put(`rangues/${id}`,data)
	}

	directBonds =(params=[])=>{
		return authAxios.get(`direct-bond`,{
			params
		});
	}

	directBondEdit =(id, data)=>{
		return authAxios.put(`direct-bond/${id}`,data);
	}

	getPrizes=(params=[])=>{
		return authAxios.get(`prize-rangue`,{
			params
		});
	}

	prizeEdit =(id, data)=>{
		return authAxios.put(`prize-rangue/${id}`,data);
	}

}

export default (new Range());
