import {
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import React, {useState}  from "react";
import { getEvidencesAsync } from "../../../../redux/community/actions";
import DataTables from '../../../../components/Datatable';
import moment from 'moment';
import {Modal, OpenModal}  from '../../../../components/Modal';


export const Evidences = ({id}) =>{

     const disclousure = useDisclosure();

  const [images, setImages]= useState(false);

  const selectable = (state)=>(state.community.evidences);


 
  const columns = (row)=>{

 
    return {
      usuario: row?.user?.fullName,
      title:  row.comment,
      fecha:  moment(row?.created_at || 'Y-m-d').format('YYYY-MM-D'),
      coordenadas:  row.latitude+'-'+row.longitude,
      opciones:(
        <div>
          <OpenModal text='Ver imagenes' onClick={()=>setImages(row.images)} disclousure={disclousure} />
        </div>
      )

    }
  } 

  const dispatchable=(query)=>{
    return getEvidencesAsync(id,{
      ...query
    });
  } 


  const renderImages=()=>{
    let data=[]
    images.map((i)=>{
      data.push(<img alt="i.id" src={i.image} />);
      return i;
    })

    console.log(data);
    return data;
  }

  return (
    <Stack style={{ display: "flex", flexDirection: "column" }} bg={"white"}>
         
        <DataTables  
          columns={columns}
          dispatchable={dispatchable}
          selectable={selectable}
          title='Gestion de evidencias'
        />


          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
            {images && renderImages()}
          </Modal>
      
    </Stack>
  );
};
