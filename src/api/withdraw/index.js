import {authAxios} from './../../config/axios';

class Withdraws{	

	get=(params=[])=>{
		return authAxios.get('withdraws/view',{
			params
		});
	}

	download=(params=[])=>{
		return authAxios.get('withdraws/download',{
			params
		});
	}

	total=(data)=>{
		return authAxios.post('withdraws/total', data);		
	}

	payments=(data)=>{
		return authAxios.post('withdraws/payments',data);		
	}

	saveTransactions=(data)=>{
		return authAxios.post('withdraws/paid', data);		
	}

	types=()=>{
		return authAxios.get('withdraws/types');
	}

	cancel=(id)=>{
		return authAxios.put(`withdraws/${id}/Cancelado`);
	}

	complete=(id)=>{
		return authAxios.put(`withdraws/${id}/Completado`);
	}
}

export default (new Withdraws());

