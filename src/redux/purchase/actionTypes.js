import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getPurchases : createAction("getPurchases"),
	getPurchase : createAction("getPurchase"),
	getBalanceHistory : createAction("getBalanceHistory")
}

export default actionTypes;