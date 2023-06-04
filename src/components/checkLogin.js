import {useDispatch} from 'react-redux';
import Token  from '../config/token';
import {check} from '../redux/auth/actions';


const CheckLogin = () => {

  const dispatch = useDispatch();
  const response = Token.check();

  if(!response){
    return false;
  }

  let roles =response.sub.roles.filter(role=>role.name==='usuario');
  if(roles.length>0)
    return false;

  dispatch(check(response.sub));
  return response;
    
}

export default CheckLogin;
