
import {userApi, profileApi} from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';


const setUser = (user, response) => {
    if(user.id === response.data.data.id)
        return response.data.data;
    return user;
}

export const getUsersAsyc = (params) => async (dispatch) => {
    const response = await userApi.get(params)
    dispatch(types.setUsers(response.data.data));

}

export const getUserTrashAsync = (params) => async (dispatch) => {
    const response = await userApi.trash(params)
    dispatch(types.setTrash(response.data.data));

}
export const unDeleteUserAsync = (id) => async (dispatch,state) => {
    await userApi.unDelete(id)
    let currentState = JSON.parse(JSON.stringify(state().user.trash));
    currentState.data = currentState.data.filter(row=>row.id!==id);

    toast.success('Usuario restaurado correctamente',{"theme":"dark"})     
    dispatch(types.setTrash(currentState))
}


export const updateUserAsync = ( role, user,usersPaginate) => async (dispatch) => {
    let data = {
        "role": role,
        ...user,
    }
    const response = await userApi.update(user.id,data); 

    user = response.data.data;

    let users = JSON.parse(JSON.stringify(usersPaginate));
    users.data = users.data.map(u=>{
        if(u.id === user.id){
            return user;
        }
        return  u;
    })

    dispatch(types.setUsers(users)); 
    toast.success('Usuario modificado correctamente',{"theme":"dark"})     
}

export const banUserAsync = (id) =>async(dispatch,state)=>{
    const response = await userApi.ban(id);
    let users = JSON.parse(JSON.stringify(state().user.users));
    toast.success('Usuario baneado correctamente', {theme:'dark'})
    users.data = users.data.map(user=>setUser(user,response));

    dispatch(types.setUsers(users)); 

}

export const unbanUserAsync = (id) =>async(dispatch,state)=>{
    const response = await userApi.unban(id);
    let users = JSON.parse(JSON.stringify(state().user.users));
    toast.success('Usuario desbaneado correctamente', {theme:'dark'})
    users.data = users.data.map(user=>setUser(user,response));

    dispatch(types.setUsers(users)); 

}

export const unlockUserAsync = (id) =>async(dispatch,state)=>{
    const response = await userApi.unlock(id);
    let users = JSON.parse(JSON.stringify(state().user.users));
    toast.success('Usuario desbloqueado correctamente', {theme:'dark'})
    users.data = users.data.map(user=>setUser(user,response));

    dispatch(types.setUsers(users)); 

}



export const saveUserAsync = (data) => async (dispatch,state)=>{
    const response = await userApi.save(data);
    toast.success('Usuario guardado correctamente', {"theme":"dark"})
    let users = JSON.parse(JSON.stringify(state().user.users));

    users.data.push(response.data.data);
    dispatch(types.setUsers(users));

}

export const updateUserProfileAsync = ( profile,usersPaginate=false) => async (dispatch) => {
    const response = await profileApi.update(profile.id, profile);
    profile = response.data.data;

    if(usersPaginate){
        let users = JSON.parse(JSON.stringify(usersPaginate));
        users.data = users.data.map(u=>{
            if(u.profile_id === profile.id){
                u.profile = profile
            }
            return  u;
        })
            dispatch(types.setUsers(users)); 

    }

    toast.success('Perfil modificado correctamente',{"theme":"dark"})     

    
  };
