import {authAxios} from './../../config/axios';

class Statics{	
	get=(params=[])=>{
		return authAxios.get(`static/products`,{
			params
		});
	}

	show=(id)=>{
		return authAxios.get(`static/products/${id}`)
	}

	update=(id,data)=>{
		return authAxios.put(`static/products/${id}`,data)
	}

	save=(data)=>{
		let formData = new FormData();

		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`static/products`,formData);
	}

	updateImage=(id,image)=>{
		let formData = new FormData();
		formData.append('image',image);
		return authAxios.post(`static/products/${id}/image`,formData);
	}
}

export default (new Statics());
