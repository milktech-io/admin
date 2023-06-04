import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getProducts : createAction("getProducts"),	
	getReviews : createAction("getReviews"),	
	getVersions : createAction("getVersions"),	
	getDocuments : createAction("getDocuments"),	
	getProduct : createAction("getProduct"),	

	//newland
	getNewland : createAction("getNewland"),
	getNewlandStock : createAction("getNewlandStock"),
	getNewlandPending : createAction("getNewlandPending"),
	getNewlandCompleted : createAction("getNewlandCompleted"),
	getNewlandFinancial : createAction("getNewlandFinancial"),
	getNewlandFinancialDetail : createAction("getNewlandFinancialDetail"),


	//Chaincrop
	getChaincrop : createAction("getChaincrop"),
	getChaincropStock : createAction("getChaincropStock"),
	getChaincropPending : createAction("getChaincropPending"),
	getChaincropCompleted : createAction("getChaincropCompleted"),
	getChaincropFinancial : createAction("getChaincropFinancial"),
	getChaincropFinancialDetail : createAction("getChaincropFinancialDetail"),
}

export default actionTypes;
