
import {productApi} from '../../../api';
import {toast} from 'react-toastify';
import Market from './Market';

export const generateId =  async (price, row_id, name, variant, setId)=>{


    productApi.nextContractId(variant).then(async (responseNextContract)=>{
    	const number = responseNextContract.data.data;

      	const marketContract = await (new Market());
      	price  = parseFloat(price) * 10000;

      	console.log(marketContract);
      	 marketContract.addProduct(price, number, name).then(_responseContract=>{
        	productApi.setContractId({
      			variant,
      			id: row_id,
      			contract_id:number
	      	}).then(_response=>{
	      		setId(number);
		      	toast.success('Contract id generado correctamente: '+number, {'theme':"dark"});
	      	})

      	}).catch(error=>{
      		toast.error('No se pudo generar el contract id', {'theme':"dark"});
        	console.log('error', error);
        });
    })
}

export const regenerateProduct =  async  (price, name, contract_id)=>{

  	const marketContract = await (new Market());
  	price  = parseFloat(price) * 10000;

  	console.log(marketContract);
  	 marketContract.addProduct(price, contract_id, name).then(_responseContract=>{
	    toast.success('Producto actualizado correctamente: '+contract_id, {'theme':"dark"});
  	}).catch(error=>{
  		toast.error('No se pudo actualizar el producto', {'theme':"dark"});
    	console.log('error', error);
    });
}
