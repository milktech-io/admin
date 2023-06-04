import {authAxios, authAxiosMedia} from './../../config/axios';

class Document{
	get=(product_id,params=[])=>{
		return authAxios.get(`products/${product_id}/documents`,{
			params
		});
	}

	delete=(id)=>{
		return authAxios.delete(`documents/${id}`);
	}

	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);

		return authAxiosMedia.post(`documents/save`,formData);
	}
	
}

export default (new Document());
