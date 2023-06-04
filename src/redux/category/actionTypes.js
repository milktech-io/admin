import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getCategories : createAction("getCategories"),	
	saveCategory  : createAction("saveCategory")
}

export default actionTypes;
