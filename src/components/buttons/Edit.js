import React from "react"
import {Link} from 'react-router-dom'

const Edit=({route})=> {
    

    return (
      <>
      <Link to={route}> <i style={{color:'#58A9B8'}} className="fas fa-pen"></i></Link>
      </>
    )
  }

export default Edit;