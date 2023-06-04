import {authAxios} from './../../config/axios';

class Infinity{	
	get=(params=[])=>{
		return authAxios.get(`infinity/plans`,{
			params
		});
	}

	show=(id)=>{
		return authAxios.get(`infinity/plans/${id}`)
	}

	update=(id,data)=>{
		return authAxios.put(`infinity/plans/${id}`,data)
	}

	save=(data)=>{
		let formData = new FormData();

		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`infinity/plans/save`,formData);
	}

	updateImage=(id,image)=>{
		let formData = new FormData();
		formData.append('image',image);
		return authAxios.post(`infinity/plans/${id}/image`,formData);
	}
}

export default (new Infinity());
