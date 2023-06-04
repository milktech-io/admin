import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Text } from '@chakra-ui/react'
import React from 'react'

export const Error = ({isOpen, onClose}) => {
  return (
    <Modal  isCentered isOpen={isOpen} onClose={onClose}>
          Alerta
          <ModalContent boxShadow={'0px 0px 25px 3px rgba(0,0,0,0.75);'} bg='brand.grey'>
            <ModalHeader fontFamily={'Syne'}>
              Iniciar sesion
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontFamily={'Syne'}>
                Debes de iniciar sesión
              </Text>
            </ModalBody>
            
          </ModalContent>
    </Modal>
  )
}
