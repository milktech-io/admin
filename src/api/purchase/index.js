import {authAxios} from './../../config/axios';

class Purchases{	
	get=(params=[])=>{
		return authAxios.get(`purchases`,{
			params
		});
	}

	show=(id)=>{
		return authAxios.get(`purchase/${id}`);
	}

	makePurchaseFree=(data)=>{
		return authAxios.post('purchase/free', data);
	}

	register=(data)=>{
		return authAxios.post('plan/purchase/admin', data);
	}

	comissions= (id)=>{
		return authAxios.get(`purchase/${id}/comissions`);
	}

	setComissions= (id)=>{
		return authAxios.post(`purchase/${id}/comissions`);
	}
}

export default (new Purchases());
