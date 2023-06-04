import {authAxios} from './../../config/axios';

class Plans{	
	get=(params=[])=>{
		return authAxios.get(`plans`,{
			params
		});
	}

	show=(id)=>{
		return authAxios.get(`plans/${id}`)
	}

	update=(id,data)=>{
		return authAxios.put(`plans/${id}`,data)
	}

	save=(data)=>{
		let formData = new FormData();

		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`plans/save`,formData);
	}

	updateImage=(id,image)=>{
		let formData = new FormData();
		formData.append('image',image);
		return authAxios.post(`plans/${id}/image`,formData);
	}
}

export default (new Plans());
