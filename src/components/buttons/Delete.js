import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import ConfirmDialog from '../ConfirmDialog';
import {useDispatch} from 'react-redux';

const Delete=({dispatchable,id,style=false})=> {
    
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = ()=>{
        onOpen()
      }

    const onClick = ()=>{
      dispatch(dispatchable(id))
    }

    return (
      <>
        <i onClick={handleClick} style={style || {"cursor":"pointer",color:"#E83F2D",'margin':"0 5px"}}className="fas fa-trash"></i>

         <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          title="Eliminar"
          message="Esta accion no se puede deshacer"
          handle={onClick} />

      </>
    )
  }

export default Delete