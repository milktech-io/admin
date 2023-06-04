import React, { useEffect } from 'react'
import { Input, InputGroup, Stack, InputRightElement, Image, Text, Center, Button } from '@chakra-ui/react'
import { login } from '../../redux/auth/actions'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
export const Login = () => {

  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: '', 
    password: ''
  })

  useEffect(() => {
    localStorage.clear()
  }, [])


  const handleLogin = async() => {
    if(data.password.trim()==='' || data.email.trim()==='')
      return;

    dispatch(login(data, setData)); 
  }

  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      handleLogin()
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

            {data.email}

            <InputGroup size='lg' width={365}>
              <Input 
                onKeyPress={handleEnter}
                type='text' 
                fontFamily={'Syne'} 
                fontWeight={'bold'} 
                letterSpacing={4} 
                placeholder='EMAIL' 
                padding={7} 
                borderColor={'#232A2F'} 
                borderRadius={22} 
                fontSize={12} 
                height={71} 
                borderWidth={2} 
                color={'#232A2F'}
                focusBorderColor={'brand.grey'}
                onChange={(e)=>{
                  setData({...data, email: e.target.value})
                }}/>

              <InputRightElement width='4.5rem' height='4.3rem'>
                <Image
                  src={require('../../assets/email.png')}
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

              <InputRightElement width='4.5rem' height='4.3rem'>
                <Image
                  src={require('../../assets/password.png')}
                />
              </InputRightElement>
          </InputGroup>


          <Button variant='link'>
            <Link to='/recuperar-password' color={'brand.secondary'} fontFamily={'Syne'} fontWeight={'light'}>Olvide mi contraseña</Link>
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
              onClick={handleLogin}>
              <Text color={'white'} fontFamily={'Syne'} letterSpacing={10} fontWeight={'bold'}>INGRESAR</Text>
            </Button>
          </Stack>
          </Stack>
    </Center> 
    </>
    )
}


export default Login;
