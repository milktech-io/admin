import { ethers } from "ethers";

class Payment {

	constructor() {
	    return (async () => {

	    	const provider = new ethers.providers.Web3Provider(window.ethereum);
	    	this.signer = provider.getSigner();

		    this.paymentAddress = process.env.REACT_APP_PAYMENT_ADDRESS; //Marketplace contract address

			const ABI = [ 
				"function dropTokens(address[] memory _recipients,uint256[] memory _amount) public",
				"function withdrawTokens() public"
			]

			this.airdropContract = new ethers.Contract(this.paymentAddress, ABI, this.signer);

		    return this;
	    })();
	  }


	dropTokens(address, amounts) {
		return this.airdropContract.dropTokens(address, amounts);
	}

}

export default Payment;