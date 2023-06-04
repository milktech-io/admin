import { Button, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Product = ({isOpen, onClose, overlay}) => {
    const [disabled, setDisabled] = React.useState(true)
    const [edit, setEdit] = React.useState(false)
    const [disableButton, setDisableButton] = React.useState(false)
  return (
    <>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent boxShadow={'0px 0px 25px 3px rgba(0,0,0,0.2);'} bg='brand.grey' h={285} >
            <ModalHeader fontFamily={'Syne'} fontWeight={700}>
            Time Passport
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody h={'100%'}>
                <VStack justify={'space-between'} h={'100%'}>

                    <HStack flex={1} justify={'space-between'} w={'100%'}>
                        <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                            Descripción
                        </Text>
                        <Input 
                            h={6} 
                            w={265}
                            borderRadius={4}
                            fontFamily={'Syne'}
                            fontSize={15}
                            placeholder='Basic usage'  
                            disabled={disabled}
                            borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                            borderWidth={0.5} />

                    </HStack>
                
                    <HStack flex={1} justify={'space-between'} w={'100%'}>
                        <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                            Costo
                        </Text>
                        <Select 
                            h={6} 
                            w={265}
                            borderRadius={4}
                            fontFamily={'Syne'}
                            fontSize={15}
                            defaultValue='1'  
                            disabled={disabled}
                            borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                            borderWidth={0.5}>
                            <option value='option1'>250</option>
                            <option value='option2'>500</option>
                            <option value='option3'>600</option>
                        </Select>

                    </HStack>
                
                    <HStack flex={1} justify={'space-between'} w={'100%'}>
                        <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                            Meses
                        </Text>
                        <Select 
                            h={6} 
                            w={265}
                            borderRadius={4}
                            fontFamily={'Syne'}
                            fontSize={15}
                            defaultValue='1'
                            disabled={disabled}
                            borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                            borderWidth={0.5}>
                            <option value='option1'>20</option>
                            <option value='option2'>40</option>
                            <option value='option3'>50</option>
                        </Select>
                    </HStack>
                
                </VStack>
            </ModalBody>
            <ModalFooter >
                <Flex justify={'space-between'} w={'100%'} direction={'row'}>
                    <Button 
                        fontFamily={'Syne'}
                        color={'brand.white'}
                        borderColor={'brand.white'}
                        borderWidth={2}
                        fontSize={15}
                        height={8}
                        disabled={disableButton}
                        bg={'brand.initialBackground'}
                        onClick={()=>{
                            setDisabled(false)
                            setDisableButton(true)
                            setEdit(true)
                        }}>
                        Editar
                    </Button>
                    <Button 
                        fontFamily={'Syne'}
                        color={'brand.white'}
                        borderColor={'brand.white'}
                        borderWidth={2}
                        bg={'brand.secondary'}
                        fontSize={15}
                        height={8}
                        onClick={()=>{

                            if(edit){
                                onClose()
                                setEdit(false)
                                setDisabled(true)
                                setDisableButton(false)
                            }else{
                                onClose()
                            }
                        
                        }}>
                            {edit === false ? 'Cerrar' : 'Guardar'}
                    </Button>
                </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>

    </>
  )
}
