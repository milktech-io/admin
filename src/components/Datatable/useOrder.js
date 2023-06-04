import  { useState} from 'react';
const useOrder = (rows,setRows) =>  {

   const [orderDesc,setOrderDesc]= useState(true);
   const [column,setColumn]= useState('');

   const orderAscCallback = (a, b, sColumn) => (a[sColumn] > b[sColumn]) ? 1 : -1;   
   const orderDescCallback = (a, b, sColumn) => (a[sColumn] < b[sColumn]) ? 1 : -1;
 
  const makeOrder = (sColumn)=>{

     if(sColumn==='options')
       return;

    if(sColumn!==column){
      setOrderDesc(false);
      setRows(rows.sort((a, b) =>{
        return a[sColumn] > b[sColumn] ? 1 : -1
      }));
    }else{
      if(orderDesc){
        setOrderDesc(false);
        setRows(rows.sort((a, b) => orderAscCallback(a, b, sColumn)));
      }
      else{
        setOrderDesc(true);
        setRows(rows.sort((a, b) => orderDescCallback(a, b, sColumn)));
      }
    }
    setColumn(sColumn);    

  }


  return {makeOrder}

}

export default useOrder;