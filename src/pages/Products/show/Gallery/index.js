import { SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteGalleryAsync, saveGalleryAsync } from '../../../../redux/product/actions';
import {Delete} from '../../../../components/buttons';
import InputFile from '../../../../components/forms/InputFile';

const styleButton ={
    cursor :'pointer',
    margin: '0px 5px',
    background: '#232a30',
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    padding: '1rem',
    borderRadius: '100px',
    color: 'white',
}

export const Gallery = ({product_id,gallery=[],type='gallery'}) => {

  const dispatch = useDispatch();

  const deleteDispatch =(row_id)=>{
    return  deleteGalleryAsync(row_id,type);
  }


  const handleSubmit = (e)=>{
      let data = {
        product_id,
        image:e.target.files[0],
        type
      }
      dispatch(saveGalleryAsync(data,type));
  }

    return (
      <>
      <div style={{margin:'3rem 0rem'}}>
        <InputFile 
         accept={['image/png', 'image/gif', 'image/jpeg', 'image/webp']}
         onChange={handleSubmit}
        />
      </div>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        {gallery.map(photo=>
          <Box  key={photo.id} style={{'position':'relative'}}>
            <img alt='' src={photo.image} /> 
            <Delete  style={styleButton} id={photo.id} dispatchable={deleteDispatch}/>
          </Box>
          )}
      </SimpleGrid>
      </>
             
    )
}
 