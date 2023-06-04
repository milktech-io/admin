import {roleApi} from '../../api';
import types from './actionTypes';
import {toast} from 'react-toastify';

export const getRolesAsync = (params=[]) => async (dispatch) => {
    const response = await roleApi.get(params);
    dispatch(types.setRoles(response.data.data));

}

export const saveRoleAsync = (data) => async (dispatch, state) => {
    const response = await roleApi.save(data);
    toast.success('Role creado correctamente', {"theme":"dark"})
    let roles = JSON.parse(JSON.stringify(state().role.roles));

    roles.data.push(response.data.data);
    dispatch(types.setRoles(roles));

}

export const deleteRolesAsync = (id) => async (dispatch, state) => {
    const response = await roleApi.delete(id);
    toast.success('Role eliminado correctamente', {"theme":"dark"})
    let roles = JSON.parse(JSON.stringify(state().role.roles));
    roles.data = roles.data.filter(role=>role.id !== id);
    dispatch(types.setRoles(roles));
    return response;
}