import {authAxios} from './../../config/axios';

class Gallery{	
	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`gallery/save`,formData);
	}	

	delete=(id)=>{
		return authAxios.delete(`gallery/${id}`);
	}	
}

export default (new Gallery());
