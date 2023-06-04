import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
 	getStatics : createAction("getStatics"),	
 	getVariants : createAction("getVariants"),	
 	getVariant : createAction("getVariant"),	
 	getSettings : createAction("getSettings"),	
 	getDiscounts : createAction("getDiscounts"),	
}

export default actionTypes;