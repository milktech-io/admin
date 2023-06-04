import React from 'react';
import Multiplier from './Multiplier';
import Newland from './Newland';
import Chaincrop from './Chaincrop';


export default function Detail({purchase}){


	if(purchase.multiplier)
		return <Multiplier purchase={purchase}/>

	if(purchase.newland?.length)
		return <Newland purchase={purchase}/>
	
	if(purchase.chaincrop?.length)
		return <Chaincrop purchase={purchase}/>

	return null;
}