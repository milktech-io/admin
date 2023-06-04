import React from 'react'
import {Stack} from '@chakra-ui/react'
import JsonForm from '../../../../components/forms/JsonForm';
import {useDispatch} from 'react-redux';
import {updateProductAsync} from '../../../../redux/product/actions';


export const Options = ({product}) => {


  const dispatch = useDispatch();

    const saveMetadata = (data)=>{
      dispatch(updateProductAsync(product.id,{
        ...product,
        metadata:JSON.stringify(data)
      }));
    }

    return (
        <Stack  bg={"white"}>    
          <JsonForm json={product.metadata} onSave={saveMetadata} />    
        </Stack>
    )
}
