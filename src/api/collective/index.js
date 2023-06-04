import {authAxios} from './../../config/axios';

class Collective{
	get=(params=[])=>{
		return authAxios.get('collective',{
			params
		});
	}


	save=(data)=>{
		let formData = new FormData();
		for (let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`collective`,formData);

	}
	
	delete=(id)=>{
		return authAxios.delete(`collective/${id}`);
	}

	getDiscounts=(params=[])=>{
		return authAxios.get('collective/discount',{
			params
		});
	}


	saveDiscount=(data)=>{
		let formData = new FormData();
		for (let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`collective/discount`,formData);

	}
	
	
	deleteDiscount=(id)=>{
		return authAxios.delete(`collective/discount/${id}`);
	}

	
}

export default (new Collective());
