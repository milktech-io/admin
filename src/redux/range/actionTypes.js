import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
 	getRanges : createAction("getRanges"),	
 	getDirectBonds : createAction("getDirectBonds"),	
 	getPrizes : createAction("getPrizes"),	
}

export default actionTypes;