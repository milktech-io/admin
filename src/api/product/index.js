import {authAxios} from './../../config/axios';
import documentApi from './document';

class Products{

	document ='';

	constructor() {  
	    this.document = documentApi;
	}

	get=(params=[])=>{
		return authAxios.get('products',{
			params
		});
	}

	save=(data)=>{
		return authAxios.post('products/save', data);
	}

	showMore=(id)=>{
		return authAxios.get(`products/${id}/show-more`);
	}

	update=(id,data)=>{
		return authAxios.put(`products/${id}`,data);
	}

	variants=(id)=>{
		return authAxios.get(`products/${id}/variants`);
	}


	nextContractId=(variant) =>{
		return authAxios.get(`products/next-contract-id/${variant}`);
	}

	setContractId=(data) =>{
		return authAxios.post(`products/set-contract-id`, data);
	}
}

export default (new Products());
