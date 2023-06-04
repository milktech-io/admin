import {authAxios} from './../../config/axios';

class Range{
	newUsers=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/register`,formData);
	}

	sells=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/sells`,formData);
	}
	
	invite=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);
		formData.append('limit',10);

		return authAxios.post(`reports/invite`,formData);
	}


	ranges=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/rangues`, formData);
	}

	packages=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/plans`, formData);
	}

	totalPackages=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/plans/total`, formData);
	}

	allSells =(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/allSells`, formData);
	}
	userWallet=()=>{

		return authAxios.post(`reports/user/wallet`);
	}	

	usersPackage=()=>{

		return authAxios.post(`reports/users/package`);
	}


	listPackages=(start, end)=>{
		let formData = new FormData();
		formData.append('minDate',start);
		formData.append('maxDate',end);

		return authAxios.post(`reports/listPackages`, formData);
	}
}


export default (new Range());
