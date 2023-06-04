import { SimpleGrid, Box, Heading, FormControl, FormLabel, Input, Image} from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import { useParams} from 'react-router-dom';
import { userApi, roleApi, profileApi, rangeApi } from '../../../api';
import {toast} from 'react-toastify';
import Builder from '../../../components/forms';
import Request from '../../../components/Request';
import Sponsor from './sponsor';
import Delete from './delete';

export const Edit = () => {

    const { id } = useParams()
    const [user, setUser]  = useState({});
    const [profile, setProfile]  = useState({});
    const [roles, setRoles] = useState([]);
    const [ranges, setRanges] = useState([]);
    const genders = useRef(['Hombre', 'Mujer', 'No binario', 'Otro']);
    const [fieldsUser, setFieldsUser] = useState([]);
    const [fieldsProfile, setFieldsProfile] = useState([]);
    const validations = {
        'mobile': {
            fn(field){
                return field.toString().length<11
            },
            message:'El campo debe ser menor o igual a 10 digitos'
        }

    }

    useEffect(()=>{
        setFieldsUser([
        {
            name:'username',
            label:'Nombre de usuario',
            required:true,
            defaultValue:user.username,
        },        
        {
            name:'email',
            label:'Correo electronico',
            required:true,
            defaultValue:user.email,
        },
        {
            name:'password',
            label:'Cambiar Contraseña',
        },
        {
            name:'role',
            label:'Rol',
            defaultValue:user.role,
            required:true,
            options: roles.map(role=>(<option value={role.name}>{role.name}</option>))
        }
        ])

    },[user, roles, ranges]);



    useEffect(()=>{
        setFieldsProfile([
        {
            name:'name',
            label:'Nombre',
            required:true,
            defaultValue:profile.name,
        },        
        {
            name:'lastname',
            label:'Apellido(s)',
            required:true,
            defaultValue:profile.lastname,
        },
        {
            name:'email',
            label:'Email 2',
            required:false,
            defaultValue:profile.email,
        },  
        {
            name:'code_mobile',
            label:'Codigo',
            required:false,
            defaultValue:profile.code_mobile,
        },     
        {
            name:'mobile',
            label:'Celular',
            required:false,
            number:true,
            defaultValue:profile.mobile,
        },
        {
            name:'country',
            label:'Pais telefono',
            required:false,
            defaultValue:profile.country,
        },
        {
            name:'facebook',
            label:'Facebook',
            required:false,
            defaultValue:profile.facebook,
        },
        {
            name:'twitter',
            label:'Twitter',
            required:false,
            defaultValue:profile.twitter,
        },
        {
            name:'instagram',
            label:'Instagram',
            required:false,
            defaultValue:profile.instagram,
        },
        {
            name:'linkedin',
            label:'Linked in',
            required:false,
            defaultValue:profile.linkedin,
        },
        {
            name:'about_me',
            label:'Acerca de mi',
            required:false,
            defaultValue:profile.about_me,
        },
        {
            name:'gender',
            label:'Genero',
            defaultValue:profile.gender,
            required:false,
            options: genders.current.map(gender=>(<option value={gender}>{gender}</option>))
        },        
        {
            name:'profession',
            label:'Profesion',
            defaultValue:profile.profession,
            required:true,
        },

        ])

    },[profile, genders]);


    const initUser = (data)=>{
        let currentRole= (data.roles[0]===undefined?'':data.roles[0].name);
        setProfile(data.profile);

        setUser({
            ...data,
            role:currentRole
        })

    }
    useEffect(()=>{
        if(id) {           
            userApi.show(id).then(response=>{
                initUser(response.data.data);
            });

            roleApi.get().then(response=>{
                setRoles(response.data.data);
            })
        }

    }, [id]);

    const saveUser = (data)=>{
        if(data.password && data.password.trim()!==''){
            if(data.password.trim().length<8){
                toast.error('La Contraseña debe tenemos almenos 8 caracteres', {"theme":"dark"})
                return;
            }
        }

        setUser(data);
        userApi.update(user.id,data).then(response=>{
            initUser(response.data.data);
            toast.success(response.data.msg, {"theme":"dark"});
        })

    }

    const saveProfile= (data)=>{
        profileApi.update(profile.id,data).then(response=>{
            setProfile(response.data.data);
            toast.success(response.data.msg, {"theme":"dark"});
        })

    }



    const deleteWallet=(password) => {

        profileApi.deleteWallet(user.id, {password}).then(response=>{
            setUser({
                ...user,
                eth_address:null,
            })
            toast.success(response.data.msg, {"theme":"dark"});
            
        })
    }

    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>

            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar usuario</Heading>

                <Image 
                    boxSize='200px' 
                    style={{"margin":"1rem auto"}}
                    src={user?.profile?.image  ?  user.profile?.image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }>
                </Image>


                <Builder fields={fieldsUser} onClick={saveUser}/>


            </Box>



            {profile && 
                <>
                <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar perfil</Heading>


                <Builder validations={validations} fields={fieldsProfile}  message='Guardar los cambios al usuario' onClick={saveProfile}  />

              

            </Box>
                <Box p={5} shadow='md' borderWidth='1px' >
                  <FormControl isRequired>
                    <FormLabel>Cartera de ETH </FormLabel>
                    <Input readOnly  disable value={user.eth_address || 'Sin cartera asignada'}  />

                    <Request action='deleteWallet' user={user} text="Eliminar wallet" onClick={deleteWallet} />

                </FormControl>
                </Box>  


                <Sponsor sponsor_id={user?.sponsor_id} />              
                <Delete />              

            
            </>
        }

            
        </SimpleGrid>


        )

}
