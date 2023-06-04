import {authAxios} from './../../config/axios';

class Documents{	
	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`documents/save`,formData);
	}	


	get=(params=[])=>{
		return authAxios.get(`documents`,{
			params
		});
	}

	delete=(id)=>{
		return authAxios.delete(`documents/${id}`);
	}	
}

export default (new Documents());
