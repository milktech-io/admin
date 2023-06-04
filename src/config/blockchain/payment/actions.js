import {withdrawApi} from '../../../api';
import {toast} from 'react-toastify';
import Payment from './Payment';

export const makePayment =  async (response, wallets, amounts)=>{

	console.log(wallets,amounts);

  	const paymentContract = await (new Payment());

  	const responseContract = await paymentContract.dropTokens(wallets, amounts);

	let ids = [];

  	response.map(withdraw=>{

  		ids.push(withdraw.id);	

  		return withdraw;
  	})

	let params = {
		hash: responseContract.hash,
		data: JSON.stringify(ids),
	};

	withdrawApi.saveTransactions(params).then(_response=>{
		toast.success("Se han guardado las transacciones", {theme:"dark"});
	})

  	return true;
   
}
