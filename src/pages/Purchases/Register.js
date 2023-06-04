import { SimpleGrid} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Builder from '../../components/forms';
import SelectUser from '../../components/select/user';
import SelectProduct from '../../components/select/product';
import {toast} from 'react-toastify';
import {purchaseApi} from '../../api/';
import {useNavigate} from 'react-router-dom';

export const PurchaseRegister = () => {

    const navigate = useNavigate();
    const [user_id, setUserId] = useState('');
    const [variant_id, setVariantId] = useState('');
    const [product_id, setProductId] = useState('');
    const [geolocation, setGeolocation] = useState(false);

    const fields = [       
        {
            name:'sold',
            label:'Cantidad de piezas',
            required:true,
        },
        {
            name:'transactionHash',
            label:'Hash de blockchain',
            required:true,
        }
    ];

    const savePurchase=(data)=>{
        purchaseApi.register({
            ...data,
            product_id,
            variant_id,
            user_id,
            ...geolocation
        }).then(_res=>{
            toast.success("Venta registrada correctamente", {"theme":"dark"});
            navigate('/ventas')
        })
    }

    const selectProduct=(data)=>{
        setProductId(data.product_id);
        setVariantId(data.variant_id);
    }



    useEffect(()=>{

      navigator.geolocation.getCurrentPosition(function(position) {
        let geo = {
          'latitude':position.coords.latitude,
          'longitude':position.coords.longitude,
        }
        setGeolocation(geo);
        },function(_error){
          alert('Activa la ubicacion')
        });

    },[]);

    return geolocation && (
        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>

            <SelectUser onChange={(data)=>setUserId(data)} />
            <SelectProduct onChange={selectProduct} />
            <Builder fields={fields} onClick={savePurchase}/> 
            



            
        </SimpleGrid>


        )

}
