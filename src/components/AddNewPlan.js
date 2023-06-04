import {  Button, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const AddNewPlan = ({ isOpen, onClose, overlay, onChange, multiplier }) => {
    const [newPlan, setNewPlan] = React.useState({
        multiplier_id: multiplier.id,
    })
    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent boxShadow={'0px 0px 25px 3px rgba(0,0,0,0.2);'} bg='brand.grey' h={350} >
                    <ModalHeader fontFamily={'Syne'} fontWeight={700}>
                        Crear un nuevo plan 
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
                                    onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
                                    placeholder='Indique el nombre'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>
                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Costo
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    fontSize={15}
                                    onChange={(e) => setNewPlan({ ...newPlan, cost: e.target.value })}
                                    placeholder='Indique un eslogan'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Actualmente
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    onChange={(e) => setNewPlan({ ...newPlan, currency: e.target.value })}
                                    fontFamily={'Syne'}
                                    fontSize={15}
                                    placeholder='Indique la moneda'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Plus
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    onChange={(e) => setNewPlan({ ...newPlan, plus_comission: e.target.value })}
                                    fontSize={15}
                                    placeholder='Indique el plus'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Intereses
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    fontSize={15}
                                    onChange={(e) => setNewPlan({ ...newPlan, interest: e.target.value })}
                                    placeholder='Indique los intereses'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />

                            </HStack>

                            <HStack flex={1} justify={'space-between'} w={'100%'}>
                                <Text fontFamily={'Syne'} fontSize={18} fontWeight={600} color={'brand.initialBackground'}>
                                    Ganancia
                                </Text>
                                <Input
                                    h={6}
                                    w={265}
                                    borderRadius={4}
                                    fontFamily={'Syne'}
                                    onChange={(e) => setNewPlan({ ...newPlan, automatically_ends: e.target.value })}
                                    fontSize={15}
                                    placeholder='Indique la ganancia'
                                    borderColor={'0px 0px 25px 3px rgba(0,0,0,0.1);'}
                                    borderWidth={0.5} />
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
                                fontSize={15}
                                height={8}
                                onClick={() => {
                                    if (newPlan.name !== null && newPlan.name !== undefined &&
                                        newPlan.cost !== null && newPlan.cost !== undefined &&
                                        newPlan.currency !== null && newPlan.currency !== undefined && 
                                        newPlan.plus_comission !== null && newPlan.plus_comission !== undefined &&
                                        newPlan.interest !== null && newPlan.interest !== undefined &&
                                        newPlan.automatically_ends !== null && newPlan.automatically_ends !== undefined) {
                                        
                                            onChange(newPlan)
                                            setTimeout(() => {
                                                window.location.reload()
                                            }, 3000)
                                            onClose()
                                    }else{
                                        alert("Todos los campos son obligatorios")
                                    }
                                }}
                                bg={'brand.initialBackground'}>
                                Guardar
                            </Button>
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
                        </Flex>
                    </ModalFooter>
                </ModalContent>
                
            </Modal>

        </>
    )
}
