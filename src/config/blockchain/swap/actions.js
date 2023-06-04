import {toast} from 'react-toastify';
import Swap from './Swap';

const runSwap =  async ()=>{

  	const SwapContract = await (new Swap());

  	try {
  		await SwapContract.enableNstSell();
  		toast.success("Swap activado", {theme:"dark"});
  	} catch(e) {
  		console.log(e);
  	}   
}

const disableSwap =  async ()=>{

  	const SwapContract = await (new Swap());

  	try {
  		await SwapContract.disableNstSell();
  		toast.success("Swap desactivado", {theme:"dark"});
  	} catch(e) {
  		console.log(e);
  	}   
}

const showBalance = async()=>{
	const swapContract = await (new Swap());

	try {
      let nsts= Number(await swapContract.nstBalance())/10000;
      let usdts = Number(await swapContract.usdtBalance())/1000000;

      nsts = 'NST '+nsts.toLocaleString("en", {
			style: "currency",
			currency: "USD"
		})

      usdts = 'USDT '+usdts.toLocaleString("en", {
		style: "currency",
		currency: "USD"
	})
      return {
      	nsts,
      	usdts,
      };
	}catch (e) {
        toast.error('Hubo un error', {'theme':"dark"});
      console.error(e);
    }
}


const withdrawFunds = async()=>{
	const swapContract = await (new Swap());

	try {
      console.log("Withdrawing funds...");
      const tx = await swapContract.withdrawPair();
      tx.wait();
      console.log("Transaction hash: " + tx.hash);
      toast.success('Retirado correctamente', {'theme':"dark"});
      alert(tx.hash)
    } catch (e) {
        toast.error('Hubo un error', {'theme':"dark"});
      console.error(e);
    }
}
export {
	runSwap,
	disableSwap,
	showBalance,
	withdrawFunds,
}