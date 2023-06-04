import React, { useEffect } from 'react'
import { Input, InputGroup, Stack, InputRightElement, Image, Text, Center, Button } from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi} from '../../api';
import { toast } from 'react-toastify';

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('')
 
  useEffect(() => {
    localStorage.clear()
  }, [])

  const handleSubmit = async() => {
    if(email.toString().trim()==='')
      return;

    authApi.forgetPassword(email).then((_response)=>{
      toast.success('Hemos enviado un email con las instrucciones', {"theme":"dark"});
      navigate('/cambiar-password');
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
            {email.email}
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
                  setEmail({...email, email: e.target.value})
                }}/>
              <InputRightElement width='4.5rem' height='4.3rem'>
                <Image
                  src={require('../../assets/email.png')}
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

export default ForgetPassword;
