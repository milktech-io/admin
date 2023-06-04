import {authAxios} from './../../config/axios';

class Tree{
	get=()=>{
		return authAxios.get('dashboard/network');
	}	

	search=(id)=>{
		return authAxios.get('dashboard/network/'+id);
	}	

	download=(data)=>{
		return authAxios.post('dashboard/network/download',data);
	}			
}

export default (new Tree());
