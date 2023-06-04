import {authAxios} from './../../config/axios';

class Version{


	save=(data)=>{
		return authAxios.post(`products/versions/save`,data);
	}
	get=(product_id,params=[])=>{
		return authAxios.get(`products/${product_id}/versions`,{
			params
		});
	}

	delete=(id)=>{
		return authAxios.delete(`products/versions/${id}`);
	}


	
}

export default (new Version());
