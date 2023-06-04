import { ethers } from "ethers";

class Swap {

	constructor() {
	    return (async () => {

	    	const provider = new ethers.providers.Web3Provider(window.ethereum);
	    	this.signer = provider.getSigner();

		    this.swapAddress = process.env.REACT_APP_SWAP_ADDRESS; //swap  contract address

		    const ABI = [
			  "function enableNstSell() public",
			  "function disableNstSell() public",
		      "function withdrawPair() public",
		      "function tokensPair() public view returns (string)",
		      "function nstBalance() public view returns (uint)",
		      "function usdtBalance() public view returns (uint)",
		    ];

			this.swapContract = new ethers.Contract(this.swapAddress, ABI, this.signer);

		    return this;
	    })();
	  }


	enableNstSell() {
		return this.swapContract.enableNstSell();
	}

	disableNstSell() {
		return this.swapContract.disableNstSell();
	}

	nstBalance() {
		return this.swapContract.nstBalance();
	}

	usdtBalance() {
		return this.swapContract.usdtBalance();
	}
	withdrawPair() {
		return this.swapContract.withdrawPair();
	}

}

export default Swap;