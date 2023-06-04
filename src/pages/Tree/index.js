import { FormLabel, Input, Box, List, ListItem, Alert, AlertIcon, Button}  from '@chakra-ui/react'
import React, {useEffect, useState} from 'react';
import { treeApi , userApi } from '../../api';
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom';


export const Tree = () => {

    const {id: user_id} = useParams();

    const [users, setUsers] = useState([]);
    const [sponsor, setSponsor] = useState(null);
    const [search, setSearch] = useState('');
    const [loading, setLoading]  = useState(true);

    
    const responseUsers = (res)=>{
        if(res.data.data.length) {
            setSponsor(res.data.data[0])
            treeApi.search(res.data.data[0].id).then(res2=>{
                setUsers(res2.data.data);
            })
        } else {
            toast.error("No se encontro el usuario", {theme:"dark"})
        }
        setLoading(false);
    }
    
    const handleSearch=()=>{

       let params = {};


        if(search.trim().length<1) {
            return;
        }

        params = {
            username:search
        };


        setLoading(true);
        userApi.get(params).then(responseUsers)
    }


    useEffect(()=>{

        setLoading(true);
        user_id ? userApi.get({
            id:user_id
        }).then(responseUsers)
        : treeApi.get().then(res=>{
            setUsers(res.data.data);
            setLoading(false);
        })

    }, [user_id])


 
    const searchSponsor = (sponsor_id)=>{
         if(loading) {
            return;
        }
        setLoading(true);
        userApi.show(sponsor_id).then(res=>{
            setSponsor(res.data.data)
            treeApi.search(res.data.data.id).then(res2=>{
                setUsers(res2.data.data);
                setLoading(false);
            
            })
        })
    }

    const style = {
        borderBottom: '2px solid #ccc',
        padding: 10,
        marginTop:0,
        cursor:'pointer',
            backgroundColor:'white',

    }

    const style2 = {
        borderBottom: '2px solid #ccc',
        padding: 10,
        marginTop:0,
        cursor:'pointer',
        backgroundColor:'#EAEAEB',
    }


    const searchUser = (id)=>{

        if(loading) {
            return;
        }

        setLoading(true);
        treeApi.search(id).then(res=>{
           const mapUser= (user)=>{
                if(id=== user.id)  {
                    if(user.referreds===undefined) {
                        user.referreds =res.data.data;
                    } else {
                        user.referreds=undefined;
                    }

                }

                if(user.referreds) {
                    user.referreds = user.referreds.map(mapUser);
                }
                return user;
            }

            setUsers(users.map(mapUser));
            setLoading(false);

        });
        


    }


    const downloadInWindow = (res)=>{
        const b64 = res.data.data;
        let mediaType="data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
        const href = mediaType+b64;
        window.open(href, "_blank");
    }

    const download = ()=>{
        const mapUser= (user)=>{
                
                delete user.id;
                delete user.fullName;
                delete user.image;
                delete user.parentId;
                delete user.profile_id;
                delete user.group_volume;

                if(user.referreds) {
                    user.referreds = user.referreds.map(mapUser);
                }
                return user;
            }

            let _users =JSON.parse(JSON.stringify(users));
             _users = _users.map(mapUser);

            treeApi.download({
                tree:JSON.stringify(_users)
            }).then(downloadInWindow)
    }
     const downloadTree = ()=>{

          treeApi.download({
                root: sponsor ? sponsor.id : 0
            }).then(downloadInWindow)

    }
 
    const renderTree = (user,index) => {

        const styleItem = {'marginLeft':16, marginTop:16};
        return <ListItem style={index%2 ? style : style2} key={user.id}>
                <h3 onClick={()=>searchUser(user.id)}>{user.username}</h3>
                {user.referreds?.length>1 &&  <List style={styleItem}>{user.referreds.map(renderTree)}</List>}
                {user.referreds!==undefined && user.referreds?.length<1 &&  <h3 style={styleItem}>...No tiene referidos</h3>}
            </ListItem>
    }

    const goUp = ()=>{
        const sponsor_id = sponsor.sponsor_id;

        if(sponsor_id) {
            searchSponsor(sponsor_id)
        } else {
            setLoading(true);
            treeApi.get().then(res=>{
                setSponsor(null);
                setUsers(res.data.data);
                setLoading(false);
            })
        }
    }


    return       <Box p={5} shadow='lg' borderWidth='1px' >
             <h1 style={{fontSize:30}}> <b>Sponsor:</b> {sponsor ? sponsor.username : 'Raiz del arbol'}</h1>
            <Alert style={loading ? {opacity:1} : {opacity:0}} status='success'><AlertIcon /> Cargando ...</Alert> 

         {!user_id && <div style={{display:'flex', marginTop:10, marginBottom:10}}>
            <FormLabel  style={{width:200}} >Nombre de usuario </FormLabel>
            <Input onChange={e=>setSearch(e.target.value)}/>
            <Button style={{ 'backgroundColor':"#FC6454", color:"white", marginBottom:16}} onClick={()=>handleSearch()}>Buscar </Button>
        </div> }



             {sponsor && <Button style={{ marginRight:16,  marginBottom:16}} onClick={goUp}> <i style={{marginRight:10}} className="fas fa fa-arrow-up"></i> Ver un nivel arriba </Button> }
             {users.length>0 && <Button style={{ marginRight:16, 'backgroundColor':"#FC6454", color:"white", marginBottom:16}} onClick={download}> <i style={{marginRight:10}} className="fas fa fa-download"></i> Descargar Vista </Button> }
             {<Button style={{ marginRight:16, 'backgroundColor':"#FC6454", color:"white", marginBottom:16}} onClick={downloadTree}> <i style={{marginRight:10}} className="fas fa fa-download"></i> Descargar todo el arbol </Button> }
       <List  style={loading ? {opacity:0.5} : {opacity:1}} spacing={3}>
            {users.map(renderTree)}
        </List>
    </Box>
}
 
 