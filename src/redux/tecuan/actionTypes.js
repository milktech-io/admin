import { createAction } from "@reduxjs/toolkit";

const actionTypes = {  	getUsersToken : createAction("datas/usersToken"),	
createArrayTokens : createAction("object/tokens"),	
postTokensId : createAction("link/tokens"),	
resetState : createAction("link/reset"),}

export default actionTypes
