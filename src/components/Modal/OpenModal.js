import React from "react"
import { Text,  Button, Icon as IconReact} from '@chakra-ui/react'

import { MdAdd } from "react-icons/md";

const OpenModal=({disclousure,text='Agregar nuevo', onClick=false, icon=null})=> {
    

    let Icon = ''
    if(icon===undefined) {
      Icon = <IconReact as={MdAdd} w={6} height={6} color={"brand.white"} mr={1} />
    } else if(icon) {
      Icon=icon;
    }
    const handleOpen=()=>{
      onClick && onClick();
      disclousure.onOpen();
      if (onClick) {
        onClick()
      }
    }
    
    return (
        <Button
            bg={"brand.initialBackground"}
            width={240}
            height={9}
            alignItems={"center"}
            onClick={handleOpen}
          >
            {icon && <Icon />}
            <Text
              fontFamily={"Syne"}
              color={"brand.white"}
              fontSize={14}
              fontWeight={"700"}
            >
              {text}
            </Text>

          </Button>
    )
  }

export default OpenModal;