import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getSwap : createAction("getSwap"),	
	getTransactions : createAction("getTransactions"),	
	getPurchases : createAction("getPurchases"),	
}

export default actionTypes;
