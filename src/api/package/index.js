import {authAxios} from './../../config/axios';

class Packages{	

	balance=(id)=>{
		return authAxios.get(`balance/${id}`);
	}

	balanceHistory=(id, params)=>{
		return authAxios.get(`balance/${id}/history`,{
			params
		});
	}

	balancesUser=(id, params)=>{
		return authAxios.get(`balance/${id}/user`,{
			params
		});
	}

	withdraws = (id, data) =>{
		return authAxios.post(`balance/${id}/withdraw-admin`, data);
	}
}

export default (new Packages());

