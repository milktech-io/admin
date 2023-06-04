import { Button, Flex, HStack, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsFillFileEarmarkArrowUpFill } from 'react-icons/bs'

export const AddNewMultiplier = ({ isOpen, onClose, overlay, onChange }) => {
    const [newMulti, setNewMulti] = React.useState({})
    const toast = useToast()
    const fileInput = useRef();
    let file = null;

    const selectFile = () => {
        fileInput.current.click();
    }

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent boxShadow={'0px 0px 25px 3px rgba(0,0,0,0.2);'} bg='brand.grey' h={260} >
                    <ModalHeader fontFamily={'Syne'} fontWeight={700}>
                        Multiplicador
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody h={'100%'}>
                        <VStack justify={'space-between'} h={'100%'}>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Nombre
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    fontSize={15}
                                    placeholder='Indica el nombre'
                                    onChange={(e) => setNewMulti({ ...newMulti, name: e.target.value })}
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>
                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Eslogan
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    fontSize={15}
                                    placeholder='Indica un eslogan'
                                    onChange={(e) => setNewMulti({ ...newMulti, slug: e.target.value })}
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Imagen
                                </Text>
                                    <input
                                        type="file"
                                        value={file}
                                        width={'100%'}
                                        accept={'image/*'}
                                        style={{ "display": "none" }} ref={fileInput}
                                        onChange={(e) => {
                                            file = (e.target.files[0])
                                            setNewMulti({ ...newMulti, image: file })
                                        }}
                                    />
                                    <Button
                                        onClick={selectFile}
                                        fontFamily={'Syne'}
                                        bg={'green.300'}
                                        borderWidth={1}
                                        borderColor={'green.400'}   
                                        fontSize={15}
                                        fontWeight={'400'}
                                        h={8}
                                        w={265}
                                        color={'green.800'}
                                    >
                                        <Icon
                                            color={'green.800'}
                                            as={BsFillFileEarmarkArrowUpFill}
                                            w={'14px'}
                                            h={'14px'}
                                            mr={'5px'}
                                        >
                                        </Icon>
                                        {'Selecciona una imagen'}
                                        <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                        <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />

                                    </Button>
                            </HStack>
                        </VStack>
                    </ModalBody>
                    <ModalFooter >
                        <Flex justify={'space-between'} w={'100%'} direction={'row'}>

                            <Button
                                fontFamily={'Syne'}
                                color={'brand.white'}
                                borderColor={'brand.white'}
                                borderWidth={1}
                                bg={'brand.secondary'}
                                fontSize={15}
                                height={8}
                                onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                fontFamily={'Syne'}
                                color={'brand.white'}
                                borderColor={'brand.white'}
                                borderWidth={1}
                                fontSize={15}
                                height={8}
                                onClick={() => {
                                    if (newMulti.name !== null && newMulti.name !== undefined &&
                                        newMulti.slug !== null && newMulti.slug !== undefined &&
                                        newMulti.image !== null && newMulti.image !== undefined) {
                                        onChange(newMulti)
                                        toast({
                                            title: 'Multiplicador creado',
                                            description: "El multiplicador se ha creado correctamente",
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true,
                                        })
                                        
                                        onClose()
                                    } else {
                                        alert("Todos los campos son obligatorios")
                                    }
                                }}
                                bg={'brand.initialBackground'}>
                                Guardar
                            </Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
