import React from "react"
import {Link} from 'react-router-dom'

const Show=({route})=> {
    

    return (
      <>
      <Link to={route}> <i style={{color:'#fc6452d9'}} className="fas fa-eye"></i></Link>
      </>
    )
  }

export default Show;