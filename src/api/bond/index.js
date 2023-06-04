import {authAxios} from './../../config/axios';

class Bonds{	

	multiplierPackage=(params=[])=>{
		return authAxios.get('bonds/multiplier/package',{
			params
		});
	}

	multiplierLoop=(params=[])=>{
		return authAxios.get('bonds/multiplier/loop',{
			params
		});
	}

	multiplierRange=(params=[])=>{
		return authAxios.get('bonds/multiplier/rangue',{
			params
		});
	}

	total=()=>{
		return authAxios.get('bonds/multiplier/total');
	}
}

export default (new Bonds());

