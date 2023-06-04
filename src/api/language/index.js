import {authAxios} from './../../config/axios';

class Language{	
	get=(params=[])=>{
		return authAxios.get(`multilanguage`,{
			params
		});
	}

	show=(id)=>{
		return authAxios.get(`multilanguage/${id}`)
	}

	update=(id,data)=>{
		return authAxios.put(`multilanguage/${id}`,data)
	}

	save=(data)=>{
		let formData = new FormData();

		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`multilanguage`,formData);
	}
	
	delete=(id)=>{
		return authAxios.delete(`multilanguage/${id}`)
	}



}

export default (new Language());
