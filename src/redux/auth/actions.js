import types from './actionTypes';
import Token from '../../config/token';
import {authApi, profileApi} from '../../api';
import {toast} from 'react-toastify';

export const login = (data)=> async (dispatch)=> {

    let response = await authApi.login(data)

    if (response.data.status) {
        let token = response.data.data;
        let user = Token.decode(token).sub;


        if (!user || user?.roles?.[0]?.name === 'usuario') {
            toast.error("No tienes los permisos para entrar", {"theme":'dark'})
        }else{
            dispatch(types.login(user))
            Token.set(token);
            window.location.reload(false);
        }
        
    }

}


export const changePhotoAsync= (data) => async(dispatch,state)=>{
    const response = await profileApi.changePhoto(data);
    let user = JSON.parse(JSON.stringify(state().auth.user));
    user.profile = response.data.data;
    dispatch(types.login(user))

}

export const check = (data)=> async (dispatch)=> {
    let response = await authApi.check();
    dispatch(types.login(data))
    return response;
}

    

export const logout=()=>async()=>{
    Token.destroy();
    localStorage.clear();
    authApi.logout();
    window.location.reload(false);
}
