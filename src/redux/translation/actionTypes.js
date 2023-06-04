import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getTranslations : createAction("getTranslations"),	
	getTranslation : createAction("getTranslation"),	
}

export default actionTypes;
