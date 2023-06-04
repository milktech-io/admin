import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Reviews} from './Review';
import {Features} from './Feature';
import {Versions} from './Version';
import {Documents} from './Document';
import {Gallery} from './Gallery';
import {Information} from './information';
import {useParams} from 'react-router-dom';
import {getProductAsync} from '../../../redux/product/actions';
import {Options} from './Option';

export const ProductShow = () => {



  const {id} = useParams();
  
  const {product} = useSelector(state=>state.product);

  const dispatch = useDispatch();

  useEffect(()=>{
    id && dispatch(getProductAsync(id))
  },[id, dispatch]);

    return (
       <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Informacion</Tab>
          <Tab>Caracteristicas</Tab>
          <Tab>Galeria</Tab>
          <Tab>Logo</Tab>
          <Tab>Banner</Tab>
          <Tab>Reviews</Tab>
          <Tab>Versiones</Tab>
          <Tab>Documentos</Tab>
          <Tab>Opciones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Information product={product} />
          </TabPanel>
          <TabPanel>
            <Features product={product} />
          </TabPanel>
          <TabPanel>
          <Gallery gallery={product.gallery} product_id={product.id} type='gallery' />
          </TabPanel>
           <TabPanel>
          <Gallery gallery={product.logo} product_id={product.id} type='logo' />
          </TabPanel>
               <TabPanel>
          <Gallery gallery={product.banner} product_id={product.id} type='banner' />
          </TabPanel>
          <TabPanel>
            <Reviews product_id={id} />
          </TabPanel>
          <TabPanel>
            <Versions product_id={id} />
          </TabPanel>
        <TabPanel>
            <Documents product_id={id} />
          </TabPanel>

        <TabPanel>
            <Options product={product} />
          </TabPanel>

        </TabPanels>
      </Tabs>
       

    )
}
