
import {menuApi} from '../../api';

export const getMenuAsync = async()  =>  {
    const response = await menuApi.get();
    localStorage.setItem("menu", JSON.stringify(response.data.data));
}