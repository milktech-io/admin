import React, { useEffect } from 'react'
import { Input, InputGroup, Stack, InputRightElement, Image, Text, Center, Button } from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi} from '../../api';
import { toast } from 'react-toastify';

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    'token':'',
    'password':'',
    'password_confirmation':''
  });

  useEffect(() => {
    localStorage.clear()
  }, [])

  const handleSubmit = async() => {
    for( let  k in data){
      if(data[k].trim()==='')
        return;
    }
    if(data['password']!==data['password_confirmation']){
      toast.error('Las contraseñas no son iguales',{"theme":"dark"});
      return;
    }

    authApi.ChangePassword(data).then((_response)=>{
      toast.success('Contraseña cambiada correctamente', {"theme":"dark"});
      navigate('/login');
    });  
  }

  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      handleSubmit()
    }
  }

  return (
    <>
    <Center bg='brand.initialBackground' h='100vh' flexDirection={'column'}>
      <Stack width={161} mb={55}>
        <Image
          src={require('../../assets/logo.png')}
        />
      </Stack>
      <Stack spacing={6} mb={20}>
         <InputGroup size='lg' width={365} color={'#232A2F'}>
              <Input 
                onKeyPress={handleEnter}
                type={'password'} 
                fontFamily={'Syne'} 
                fontWeight={'bold'} 
                letterSpacing={4} 
                placeholder='TU TOKEN AQUI' 
                padding={7} 
                borderColor={'#232A2F'} 
                borderRadius={22} 
                fontSize={12} 
                height={71} 
                borderWidth={2} 
                focusBorderColor={'brand.grey'}
                color={'#232A2F'}
                onChange={(e)=>{
                  setData({...data, token: e.target.value})
                }}/>
              <InputRightElement width='4.5rem' height='4.3rem'>
                <Image
                  src={require('../../assets/password.png')}
                />
              </InputRightElement>
          </InputGroup>
          <InputGroup size='lg' width={365} color={'#232A2F'}>
              <Input 
                onKeyPress={handleEnter}
                type={'password'} 
                fontFamily={'Syne'} 
                fontWeight={'bold'} 
                letterSpacing={4} 
                placeholder='CONTRASEÑA' 
                padding={7} 
                borderColor={'#232A2F'} 
                borderRadius={22} 
                fontSize={12} 
                height={71} 
                borderWidth={2} 
                focusBorderColor={'brand.grey'}
                color={'#232A2F'}
                onChange={(e)=>{
                  setData({...data, password: e.target.value})
                }}/>
            </InputGroup>
            <InputGroup size='lg' width={365} color={'#232A2F'}>
              <Input 
                onKeyPress={handleEnter}
                type={'password'} 
                fontFamily={'Syne'} 
                fontWeight={'bold'} 
                letterSpacing={4} 
                placeholder='CONFIRMA CONTRASEÑA' 
                padding={7} 
                borderColor={'#232A2F'} 
                borderRadius={22} 
                fontSize={12} 
                height={71} 
                borderWidth={2} 
                focusBorderColor={'brand.grey'}
                color={'#232A2F'}
                onChange={(e)=>{
                  setData({...data, password_confirmation: e.target.value})
                }}/>
              <InputRightElement width='4.5rem' height='4.3rem'>
                <Image
                  src={require('../../assets/password.png')}
                />
              </InputRightElement>
          </InputGroup>

          <Button variant='link'>
            <Link to='/login' color={'brand.secondary'} fontFamily={'Syne'} fontWeight={'light'}>Ir a Iniciar sesion</Link>
          </Button>

          <Stack width={'100vw'} alignSelf={'center'} position={'absolute'} bottom={0}>
            <Stack width={176} height={126} alignSelf={'center'} zIndex={2} position={'relative'} top={4}>
            </Stack>
            <Button 
              alignSelf={'center'} 
              bg={'brand.secondary'} 
              h={20}
              width={'100vw'} 
              borderRadius={0} 
              zIndex={1}
              onClick={handleSubmit}>
              <Text color={'white'} fontFamily={'Syne'} letterSpacing={10} fontWeight={'bold'}>RECUPERAR</Text>
            </Button>
          </Stack>
          </Stack>
    </Center> 
    </>
    )
}

export default ChangePassword;
