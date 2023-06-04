import React from 'react'
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import App from '../App'
import CheckLogin from '../components/checkLogin'
import {guest} from './guest';
import {admin} from './admin';

const RoutesComponent = () =>  {

  const login = CheckLogin();

  const myRole = login?.sub?.roles[0].name;



  const routesAdmin = admin.filter(route=>{
    if(route.roles===undefined)
      return true;

    if(route.roles.length === 0)
      return true;

    return route.roles.includes(myRole);
  })

  return(   
       <BrowserRouter basename={`/`}>
       
        {
          login ?
          <App>
             <Routes>
              {routesAdmin.map( ({path,Component, Children=false}) => (
                <Route key={path}   path={path} element={<Component />} >

                { Children && Children.map(({path: pathChildren, Element, data={}}) => {
                  return <Route key={pathChildren}  path={pathChildren} element={<Element data={data} />} />
                })}
                </Route>         


              ))}
              {/*<Route  path="/*" element={<Navigate to={to} replace />} />*/}
            </Routes>
          </App>        
          :
          <>     
          <Routes>
            {guest.map(({path, Component})=>{
              return(
                  <Route  key={path} path={path} component={Component} element={<Component />}/>
                )
            })}
            <Route  path="/*" element={<Navigate to="/login" replace />} />
          </Routes>
          </>
        }
               
         </BrowserRouter>
    )
}

export default RoutesComponent;