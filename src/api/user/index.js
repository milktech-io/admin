import {authAxios} from './../../config/axios';

class User{
	get=(params=[])=>{
		return authAxios.get('users',{
			params
		});
	}

	show=(id)=>{
		return authAxios.get('users/'+id);
	}	

	save=(data)=>{
		return authAxios.post('users',data);
	}

	update=(id,data)=>{
		return authAxios.put(`users/${id}`,data);
	}	

	ban=(id)=>{
		return authAxios.post(`users/${id}/ban`);
	}	

	unban=(id)=>{
		return authAxios.post(`users/${id}/unban`);
	}

	unlock=(id)=>{
		return authAxios.post(`users/${id}/unlock`);
	}		
	
	delete=(id)=>{
		return authAxios.post(`users-delete/delete/${id}`);
	}	
	
	updateMine=(data)=>{
		return authAxios.put(`users/update`,data);
	}	


	aportation=(user_id)=>{
		return authAxios.get(`aportation/${user_id}`);
	}

	groupVolumen=(user_id)=>{
		return authAxios.get(`group-volume/${user_id}`);
	}

	directVolumen=(user_id)=>{
		return authAxios.get(`direct-volume/${user_id}`);
	}


	updateSponsor =(id, data) =>{
		return authAxios.post(`users/${id}/sponsor`, data);
	}


	//trash
	trash=(params=[])=>{
		return authAxios.get('users/trash',{
			params
		});
	}

		//trash
	unDelete=(id)=>{
		return authAxios.post(`users/${id}/unDelete`);
	}
}

export default (new User());
