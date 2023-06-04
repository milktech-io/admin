import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
	getVotes : createAction("getVotes"),	
	getChallenges : createAction("getChallenges"),	
	getEvidences : createAction("getEvidences"),	
	getEvents : createAction("getEvents"),	
}

export default actionTypes;
