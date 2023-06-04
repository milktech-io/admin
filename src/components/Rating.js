import React from "react";
import {Center} from '@chakra-ui/react';

const Rating = ({stars})=>{

  const buttons=[];

  const starsFloor = Math.floor(stars);
  const rest = 5 - starsFloor;


  for (let i=0; i<starsFloor; i++){
    buttons.push(<i key={'star-'+i}  style={{color:'rgb(252, 101, 84)'}} className="fas fa-star"></i>)
  }

    for (let i=0; i<rest; i++){
    buttons.push(<i key={'star-'+(5-i)}  className="fas fa-star"></i>)
  }


  return  <div>{buttons} <Center><b>{parseFloat(stars).toFixed(2)}</b></Center></div>
}


export default Rating;