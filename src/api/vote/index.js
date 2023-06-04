import {authAxios} from './../../config/axios';

class Vote{	
	get=(params=[])=>{
		return authAxios.get(`/community/vote`,{
			params
		});
	}

	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);
		return authAxios.post('/community/vote', formData);
	}

	result=(vote_id)=>{
		return authAxios.get(`/community/vote/${vote_id}/result`);
	}

	delete = (id) =>{
		return authAxios.delete(`/community/vote/${id}`);
	}

	update = (id, data) =>{
		return authAxios.put(`/community/vote/${id}`, data);
	}
}

export default (new Vote());
