import {authAxios} from './../../config/axios';

class Role{
	get=(params)=>{
		return authAxios.get('roles', {
			params
		});
	}	

	save=(data)=>{
		return authAxios.post('roles', data);
	}

	delete=(id)=>{
		return authAxios.delete(`roles/${id}`);
	}		
}

export default (new Role());
