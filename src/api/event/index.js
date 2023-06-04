import {authAxios} from './../../config/axios';

class Event{	
	get=(params=[])=>{
		return authAxios.get(`/community/events`,{
			params
		});
	}
	show=(id)=>{
		return authAxios.get(`/community/events/${id}`);
	}
	save=(data)=>{
		let formData = new FormData();
		for(let k in data)
			formData.append(k,data[k]);

		return authAxios.post(`/community/events/save`,formData);
	}

	delete=(id)=>{
		return authAxios.delete(`/community/events/${id}`);
	}

}

export default (new Event());
