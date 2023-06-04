import {authAxios} from './../../config/axios';

class Menu{
	get=()=>{
		return authAxios.get('modules');
	}	
}

export default (new Menu());
