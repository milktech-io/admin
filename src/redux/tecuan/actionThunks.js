import {tecuanApi} from '../../api';
import {toast} from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";


const postTokensIdAsync = createAsyncThunk(
  "link/tokens",
  async ({ inputs, id }, thunkAPI) => {

    let array = Object.entries(inputs);
    let arrayOfObj = [];

    for (let item of array) {
      arrayOfObj.push({ token_id: item[1]});    
    }

    const data = {
      event_register_tecuan_id: id,
      tokens: arrayOfObj,
    };
    try {
      const response = await tecuanApi.save(JSON.stringify(data));
      toast.success("Token asignado correctamente",{"theme":"dark"});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Hubo un error');
    }
    
  }
);


const actionThunks = { postTokensIdAsync }
export default actionThunks