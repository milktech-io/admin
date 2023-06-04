import { ethers } from "ethers";

class Market {


	constructor() {
	    return (async () => {

	    	const provider = new ethers.providers.Web3Provider(window.ethereum);
	    	this.signer = provider.getSigner();

		    this.marketAddress = process.env.REACT_APP_MARKET_ADDRESS; //Marketplace contract address

		    const ABI = [ "function addProduct(uint price, uint id, string memory name) public" ];

			this.marketContract = new ethers.Contract(this.marketAddress,ABI , this.signer);

		    return this;
	    })();
	  }


	addProduct(price, id, name) {
		return this.marketContract.addProduct(price, id, name);
	}

}

export default Market;