import {authAxios} from './../../config/axios';

class Newland{	
	get=(params=[])=>{
		return authAxios.get(`newland/stocks`,{
			params
		});
	}
	
	show=(id)=>{
		return authAxios.get(`newland/stocks/${id}`);
	}

	update=(id,data)=>{
		return authAxios.put(`newland/stocks/${id}`,data)
	}

	updateImage=(id,image)=>{
		let formData = new FormData();
		formData.append('image',image);
		return authAxios.post(`newland/stocks/${id}/image`,formData);
	}

	saveToken(id, data) {
		return authAxios.put(`newland/tokens/${id}`, data);
	}

	completed=(params=[])=>{
		return authAxios.get(`newland/tokens/completed`,{
			params
		});
	}

	pending=(params=[])=>{
		return authAxios.get(`newland/tokens/pending`,{
			params
		});
	}

	getFinancial  = (id, params=[])=>{
		return authAxios.get(`newland/stocks/${id}/financial`,{
			params
		});
	}
	getFinancialDetail  = (id, params=[])=>{
		return authAxios.get(`newland/stocks/${id}/financial-detail`,{
			params
		});
	}
	uploadFinancial =(id,document)=>{
		let formData = new FormData();
		formData.append('document',document);
		return authAxios.post(`newland/stocks/${id}/financial`,formData);
	}

	sendFinancial =(id)=>{
		return authAxios.post(`newland/stocks/${id}/send-financial`);
	}
	
}

export default (new Newland());
