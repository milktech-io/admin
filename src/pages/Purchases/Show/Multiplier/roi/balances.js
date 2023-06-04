import React from 'react'
import {getBalanceHistoryAsync} from '../../../../../redux/purchase/actions';
import DataTables from '../../../../../components/Datatable';

export default function Balances({purchase}) {   


   const dispatchable = (query)=>{
      return getBalanceHistoryAsync(purchase.multiplier.id, {
        ...query,
      });
    }


   const selectable = (state)=>(state.purchase.balance);


      const columns = (row)=>{
        return {
          balance : `$ ${row.balance} ${row.currency}`,
          movimiento : `$ ${row.movement} ${row.currency}`,
          ganancia_al_dia : `$ ${row.profit} ${row.currency}`,
          invitacion : `$ ${row.comission} ${row.currency}`,
          date: new Date(row.date).toLocaleString()
        }
      } 

  return (


          <DataTables  
            columns={columns}
            dispatchable={dispatchable}
            selectable={selectable}
            title='Balance'
          />

  );
}