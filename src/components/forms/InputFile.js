import { Input } from '@chakra-ui/react'
import React from 'react'


const styleInput =  {
    margin: '0rem 0rem',
    border: '4px dashed gray',
    padding: '1rem',
    height: 'auto',
}

const InputFile =({ accept=['*'], onChange })=> {

  return (
    <>
       <Input style={styleInput}
       size="md"
       type="file"
       accept={accept}
       onChange={onChange}
      />

    </>
  )
}

export default InputFile;