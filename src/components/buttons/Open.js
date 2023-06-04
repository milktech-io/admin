import React from "react"

const Open=({route})=> {
    

    const handleClick=()=>{
      window.open(route,'_blank');
    }

    return (
      <i onClick={handleClick} style={{color:'#fc6452d9'}} className="fas fa-file"></i>
    )
  }

export default Open;