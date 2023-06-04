import React from "react"
import { Text,  Button, Icon} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';
import { MdAdd } from "react-icons/md";

const Create=({route,text='Agregar nuevo'})=> {
    


    const navigate = useNavigate();
    const handleOpen=()=>{
      navigate(route)
    }
    
    return (
        <Button
            bg={"brand.initialBackground"}
            width={240}
            height={9}
            alignItems={"center"}
            onClick={handleOpen}
          >
            <Icon as={MdAdd} w={6} height={6} color={"brand.white"} mr={1} />
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

export default Create;