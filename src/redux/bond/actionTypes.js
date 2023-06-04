import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	multiplier : {
		package: {
			getPending : createAction("getMultiplierPackagePending"),	
			getCompleted : createAction("getMultiplierPackageCompleted"),	
		},
		loop: {
			getPending : createAction("getMultiplierLoopPending"),	
			getCompleted : createAction("getMultiplierLoopCompleted"),	
		},
		range: {
			getPending : createAction("getMultiplierRangePending"),	
			getCompleted : createAction("getMultiplierRangeCompleted"),	
		}
	}
}

export default actionTypes;
