/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Votes from './votes'
import Challenges from './Challenges'
import ChallengesShow from './Challenges/Show'
import Static from '../Products/Statics';
import Discounts from './collectives/Discounts';
import Settings from './collectives/Settings';
import Events from './Events';
import EventsShow from './Events/show';
import Navbar from '../../components/Navbar';

export const CommunityIndex = () => {
  

  const routes= [
    {name:'Noticias', 'route':'/noticias'},
  ]
  
  return (
    <>
    <Navbar routes={routes} />

    </>
  )
}

export const CommunityRoutes= [
  {path:'',  Element:Events},
  {path:'comunidad/noticias',  Element:Events},
]