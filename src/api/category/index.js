import {authAxios} from './../../config/axios';

class Categories{
	get=(params=[])=>{
		return authAxios.get('categories',{
			params
		});
	}

	show=(id)=>{
		return authAxios.get('categories/'+id);
	}	

	save=(data)=>{
		let formData = new FormData();
		for (let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`categories/save`,formData);

	}
	updateImage=(id, data)=>{
		let formData = new FormData();
		for (let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`categories/${id}/image`,formData);
	}

	delete=(id)=>{
		return authAxios.delete(`categories/${id}`);
	}

	update=(id,data)=>{
		return authAxios.put(`categories/${id}`,data);
	}	
	
}

export default (new Categories());
