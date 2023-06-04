import {authAxios} from './../../config/axios';

class Challenge{	
	get=(params=[])=>{
		return authAxios.get(`/community/challenge`,{
			params
		});
	}
	show=(id)=>{
		return authAxios.get(`/community/challenge/${id}`);
	}
	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`/community/challenge`,formData);
	}

	delete=(id)=>{
		return authAxios.delete(`/community/challenge/${id}`);
	}

	evidences=(id, params)=>{
		return authAxios.get(`/community/challenge/${id}/evidences`,{
			params
		});
	}
}

export default (new Challenge());
