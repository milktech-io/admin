import axios, {authAxios} from './../../config/axios';
import Token from '../../config/token';

class Auth{
	login=(data)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('auth/login/admin',data);
	}

	check=()=>{
		return authAxios.post('auth/check');
	}

	logout=()=>{
		return authAxios.post('auth/logout');
	}	

	forgetPassword=(email)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('auth/recover-password-web',email)
	}

	ChangePassword=(data)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('auth/change-password',data)
	}
}

export default (new Auth());
