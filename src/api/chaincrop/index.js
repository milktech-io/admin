import {authAxios} from './../../config/axios';

class Chaincrop{	
	get=(params=[])=>{
		return authAxios.get(`chaincrop/stocks`,{
			params
		});
	}
	
	show=(id)=>{
		return authAxios.get(`chaincrop/stocks/${id}`);
	}

	update=(id,data)=>{
		return authAxios.put(`chaincrop/stocks/${id}`,data)
	}

	updateImage=(id,image)=>{
		let formData = new FormData();
		formData.append('image',image);
		return authAxios.post(`chaincrop/stocks/${id}/image`,formData);
	}

	saveToken(id, data) {
		return authAxios.put(`chaincrop/tokens/${id}`, data);
	}

	completed=(id,params=[])=>{
		return authAxios.get(`chaincrop/tokens/${id}/completed`,{
			params
		});
	}

	pending=(id,params=[])=>{
		return authAxios.get(`chaincrop/tokens/${id}/pending`,{
			params
		});
	}

	getFinancial  = (id, params=[])=>{
		return authAxios.get(`chaincrop/financial/${id}`,{
			params
		});
	}
	getFinancialDetail  = (id, params=[])=>{
		return authAxios.get(`chaincrop/stocks/${id}/financial-detail`,{
			params
		});
	}
	saveFinancial =(id,data)=>{;
		return authAxios.post(`chaincrop/financial/${id}`,data);
	}

	sendFinancial =(id)=>{
		return authAxios.post(`chaincrop/stocks/${id}/send-financial`);
	}
	
}

export default (new Chaincrop());
