import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
 	getMultipliers : createAction("getMultipliers"),	
 	getPlans : createAction("getPlans"),	
 	getPlan : createAction("getPlan"),	
}

export default actionTypes;