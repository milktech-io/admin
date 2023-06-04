import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
 	getPlans : createAction("getPlans"),	
 	getPlan : createAction("getPlan"),	
}

export default actionTypes;