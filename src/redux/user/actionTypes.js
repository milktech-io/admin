import { createAction } from "@reduxjs/toolkit";

const actionTypes = { 
	setUsers : createAction("setUsers"),
	setTrash : createAction("setTrash"),
}	

export default actionTypes;