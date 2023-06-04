import axios from './../../config/axiosTecuan';

class Tecuan{
	get=(page)=>{
		return axios.get(`/users/event/tecuan?page=${page}`);
	}
	
	save=(data)=>{
		return axios.post(`/link/token`,data);
	}	
}

export default (new Tecuan());
