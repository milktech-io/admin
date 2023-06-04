import { SimpleGrid, Box, Heading, FormControl, FormLabel, Input, Select ,Image} from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userApi, profileApi } from '../../api';
import { changePhotoAsync } from '../../redux/auth/actions'
import {Confirm} from '../../components/buttons';
import {toast} from 'react-toastify';
import InputFile from '../../components/forms/InputFile';

export const Profile = () => {

    const { user:userState} = useSelector(state=>state.auth);
    const [user, setUser]  = useState({});
    const [profile, setProfile]  = useState({});
    const [password, setPassword]  = useState('');
    const genders = useRef(['Hombre', 'Mujer', 'No binario', 'Otro']);
    const dispatch = useDispatch();


    console.log(userState);

    const saveImage= (e)=>{

        dispatch(changePhotoAsync(e.target.files[0]))
    }

    const initUser = (data)=>{
        let currentRole= (data.roles[0]===undefined?'':data.roles[0].name);
        setProfile(data.profile);

        setUser({
            ...data,
            role:currentRole
        })

    }
    useEffect(()=>{
        if(userState)
            initUser(userState)

    }, [userState]);

    const handleChangeUser = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }
    const handleChangeProfile = (e)=>{
        setProfile({
            ...profile,
            [e.target.name]:e.target.value,
        })
    }

    const saveUser = ()=>{

        let data =user;
        if(password && password?.trim()!=='' ){
            if(password.trim().length<8){
                toast.error('La Contraseña debe tenemos almenos 8 caracteres', {"theme":"dark"})
                return;
            }

           data['password'] = password;

        }

        setUser(data);
        userApi.updateMine(data).then(response=>{
            initUser(response.data?.data);
            toast.success(response.data?.msg, {"theme":"dark"});
        })

    }

    const saveProfile= ()=>{
        profileApi.updateMine(profile).then(response=>{
            setProfile(response.data?.data);
            toast.success(response.data?.msg, {"theme":"dark"});
        })
    }


    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar usuario</Heading>

                <Image
                style={{margin:'1rem auto'}} 
                    boxSize='200px' 
                    src={user?.profile?.image  ?  user.profile?.image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }>
                </Image>
           
                <InputFile  accept={['image/png', 'image/gif', 'image/jpeg', 'image/webp']} onChange={saveImage} />



                <FormControl isRequired>
                    <FormLabel>Nombre de usuario</FormLabel>
                    <Input value={user?.username} name='username' onChange={handleChangeUser} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Correo electronico</FormLabel>
                    <Input value={user?.email} name='email' onChange={handleChangeUser} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Cambiar Contraseña</FormLabel>
                    <Input value={password} name='email' onChange={(e)=>setPassword(e.target.value)} />
                </FormControl>



                <FormControl isRequired>
                    <FormLabel>Role</FormLabel>
                    <Input readOnly disabled="true" value={user?.role}  />
                </FormControl>


                <Confirm title='Guardar' message='Guardar los cambios al usuario' onClick={saveUser} />




            </Box>



            {profile && (
                <Box p={5} shadow='md' borderWidth='1px' >
                <Heading fontSize='xl'>Editar perfil</Heading>


                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input value={profile.name} name='name' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Apellido(s)</FormLabel>
                    <Input value={profile.lastname} name='lastname' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email 2</FormLabel>
                    <Input value={profile.email} name='email' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Telefono celular</FormLabel>
                    <Input value={profile.mobile} name='mobile' onChange={handleChangeProfile} />
                </FormControl>
                

                <FormControl isRequired>
                    <FormLabel>Facebook</FormLabel>
                    <Input value={profile.facebook} name='facebook' onChange={handleChangeProfile} />
                </FormControl>


                <FormControl isRequired>
                    <FormLabel>Twiter</FormLabel>
                    <Input value={profile.twitter} name='twitter' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Instagram</FormLabel>
                    <Input value={profile.instagram} name='instagram' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Linkedin</FormLabel>
                    <Input value={profile.linkedin} name='linkedin' onChange={handleChangeProfile} />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Acerca de </FormLabel>
                    <Input value={profile.about_me} name='about_me' onChange={handleChangeProfile} />
                </FormControl>


                <FormControl isRequired>
                    <FormLabel>Genero</FormLabel>
                    <Select  name="gender" onChange={handleChangeProfile} value={profile.gender} fontFamily={'Syne'} fontSize={15} fontWeight={500} h={8} >
                        {genders.current.map(gender=>(<option value={gender}>{gender}</option>))}
                    </Select>
                </FormControl>


                <FormControl isRequired>
                    <FormLabel>Profesion</FormLabel>
                    <Input  name="profession" onChange={handleChangeProfile} value={profile.profession} fontFamily={'Syne'} fontSize={15} fontWeight={500} h={8} />
                </FormControl>



                <FormControl isRequired>
                    <FormLabel>Cartera de ETH </FormLabel>
                    <Input readOnly  disable value={user?.eth_adress || 'Sin cartera asignada'}  />
                </FormControl>


                <Confirm title='Guardar' message='Guardar los cambios al usuario' onClick={saveProfile} />




            </Box>)
        }

            
        </SimpleGrid>


        )

}
