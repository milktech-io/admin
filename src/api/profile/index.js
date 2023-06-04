import {authAxios} from './../../config/axios';

class Profile{	
	updateMine=(data)=>{
		return authAxios.put(`profile/update`,data);
	}	

	update=(id,data)=>{
		return authAxios.put(`profile/${id}/update`,data);
	}	

	changePhoto=(data)=>{
		let formData = new FormData();
		formData.append('photo',data)
		return authAxios.post(`profile/photo`,formData);
	}	

	deleteWallet=(id, data) =>{
		return authAxios.post(`profile/${id}/delete-wallet`, data);
	}
}

export default (new Profile());
