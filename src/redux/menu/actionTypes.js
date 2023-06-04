import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
 	updateRolesUser : createAction("updateRolesUser/users"),
	getUsers : createAction("datas/users"),
	getProfile : createAction("profile/roles"),
	getRoles : createAction("roles/users"),
	updateUserProfile : createAction("updateUserProfile/users"),
	getPlans : createAction("get/plan"),
}

export default actionTypes;
