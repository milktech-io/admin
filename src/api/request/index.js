import {authAxios} from './../../config/axios';

class User{

	save=(data)=>{
		return authAxios.post('requests',data);
	}

}

export default (new User());
