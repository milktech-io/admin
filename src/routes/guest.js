import Login from "../pages/guest/Login"
import ForgetPassword from "../pages/guest/ForgetPassword"
import ChangePassword from "../pages/guest/ChangePassword"

export const guest=[
        {path:'/login', Component:Login},
        {path:'/recuperar-password', Component:ForgetPassword},
        {path:'/cambiar-password', Component:ChangePassword},
      
]
