import React, {useEffect, useRef} from 'react';
import { Button } from '@chakra-ui/react'

export const Tickets = () => {


    let opened = useRef(false);

    const open = (check=false)=>{

        if (check) {
            opened.current!==true && window.open(process.env.REACT_APP_HELPDESK,'_blank');
            opened.current=true;
            return;
        }

        window.open(process.env.REACT_APP_HELPDESK,'_blank');
    }

    useEffect(()=>{
        open(true)
    },[]);

    return <div style={{textAlign:'center',margin:'3rem 0'}} onClick={()=>open(false)}>
        <Button>Abrir Helpdesk</Button>
    </div>
}
 