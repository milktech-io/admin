import {authAxios} from './../../config/axios';

class Review{
	get=(product_id,params=[])=>{
		return authAxios.get(`products/${product_id}/reviews`,{
			params
		});
	}

	hidden=(id)=>{
		return authAxios.get(`products/reviews/${id}/hidden`)
	}
	
}

export default (new Review());
