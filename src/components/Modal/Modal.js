import { Modal as ModalReact, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from '@chakra-ui/react'
import React from 'react'

export default function Modal ({children, title, isOpen, onClose, large=false}) {

  const styleModal = {
    maxHeight:'80vh',
    overflow:'scroll'
  }

  const styleContent= large? {maxWidth:'80vw'} : {};


  return (
    <>
        <ModalReact  isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={styleContent} boxShadow={'0px 0px 25px 3px rgba(0,0,0,0.2);'} >
            <ModalHeader fontFamily={'Syne'} fontWeight={700} color={'brand.initialBackground'}>
            {title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody  style={styleModal}>

            {children}
               
            </ModalBody>
           
          </ModalContent>
        </ModalReact>

    </>
  )
}
