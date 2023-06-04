import { Text, Button, useDisclosure } from "@chakra-ui/react"
import React from "react"
import ConfirmDialog from '../ConfirmDialog';

const Confirm=({style, title='Confirmar' , enabled=true, icon=false, message='Confirma tu accion', onClick, text='Confirma'})=> {
    
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleClick = ()=>{
      enabled && onOpen()
    }

    return (
      <>
        <Button style={style || {margin:'1rem 0rem', 'backgroundColor':"#FC6454","color":"white"}} onClick={handleClick}>

        {
          icon ?  (<i className={icon} />) :

            (<Text>{text}</Text>)
        }
        </Button>
         <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          message={message}
          handle={onClick} />

      </>
    )
  }

export default Confirm