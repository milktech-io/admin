import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-native-web'

export const ModalError = ({isOpen, title, onClose, msg}) => {
   
  return (
    <>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay  
            bg='brand.initialBackground'
            />
            <ModalContent 
                boxShadow={'0px 0px 10px 1px #232A2F'} 
                bg='brand.secondary' 
                w={355}>
                <ModalHeader 
                    color={'white'} 
                    fontWeight={'extrabold'} 
                    fontFamily={'Syne'}
                    fontSize={15}
                    letterSpacing={1.2}>
                {title}
                </ModalHeader>
                <ModalCloseButton color={'white'}/>
                <ModalBody>
                <Text 
                    fontFamily={'Syne'} 
                    color={'white'}
                    letterSpacing={1.2}
                    fontSize={13} >
                    {msg}
                </Text>
                </ModalBody>
                <ModalFooter>
                <Button 
                    fontFamily={'Syne'}
                    color={'brand.white'}
                    borderColor={'brand.white'}
                    borderWidth={2}
                    bg={'brand.secondary'}
                    onClick={onClose}>
                    Continue
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
    </>
  )
}



