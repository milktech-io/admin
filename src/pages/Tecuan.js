import {
  Button,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { getUsersTokenAsync, postTokensIdAsync } from "../redux/tecuan/actions";
import { useDispatch, useSelector } from "react-redux";

export const Tecuan = () => {
  const dispatch = useDispatch();
  const { usersToken, linkSucces, linkError } = useSelector((state) => state.tecuan);
  const [tokensArray, setTokensArray] = useState([]);
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState([]);
  const [valid, setValid] = useState(true);
  const [link, setLink] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [id, setId] = useState();
  const [scrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getUsersTokenAsync(1));
  }, [dispatch]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newVal = value;
    setInputs({
      ...inputs,
      [name]: newVal,
    });

    setValid(true);
  };
  useEffect(() => {
    if (linkSucces) {
      dispatch(getUsersTokenAsync(1));
      onClose();
    }
    if (linkError) {
      console.log(linkError);
      setMessage("Hubo un error, vuelve a intentarlo");
    }
  }, [linkSucces, linkError, dispatch, onClose]);


  const validateMessage=(index)=>{
    let key = 'token_id'+index;

    for(let k in inputs){
      if(k===key)
        continue;

      if(inputs[key]===inputs[k]){
        setValid(false);
        return 'No se puede repetir el Token Id';
      }
    }

    return '';

  }
    return (
      <Stack
        style={{ display: "flex", flexDirection: "row" }}
        bg={"white"}
        w={"100%"}
      >
        <VStack w={"100%"} paddingX={3} paddingBottom={4} spacing={3}>
          <Stack
            bg={"rgba(153,153,153,0.25)"}
            h={"100%"}
            borderRadius={10}
            padding={5}
            borderWidth={1}
            borderColor={"rgba(153,153,153,0.1)"}
            width={"100%"}
          >
            <HStack
              justify={"space-between"}
              borderBottomWidth={1}
              borderBottomColor={"rgba(153,  153, 153, 0.2)"}
              paddingBottom={2}
            >
              <Text
                fontFamily={"Syne"}
                fontSize={18}
                fontWeight={800}
                color={"brand.initialBackground"}
              >
                TECUAN
              </Text>
            </HStack>
            <VStack w={"100%"} h={"100%"}>
              <TableContainer
                w={"100%"}
                h={"100%"}
                bg={"rgba(153,153,153,0.25)"}
                borderWidth={0.5}
                borderColor={"brand.initialBackground"}
                borderRadius={10}
              >
                <Table size={"sm"} overflowY={"scroll"}>
                  <Thead>
                    <Tr h={10}>
                      <Th
                        fontFamily={"Syne"}
                        fontSize={14}
                        fontWeight={700}
                        color={"brand.white"}
                      >
                        Nombre completo
                      </Th>
                      <Th
                        fontFamily={"Syne"}
                        fontSize={14}
                        fontWeight={700}
                        color={"brand.white"}
                      >
                        Telefono
                      </Th>
                      <Th
                        fontFamily={"Syne"}
                        fontSize={14}
                        fontWeight={700}
                        color={"brand.white"}
                      >
                        Email
                      </Th>
                      <Th
                        fontFamily={"Syne"}
                        fontSize={14}
                        fontWeight={700}
                        color={"brand.white"}
                      >
                        Token
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody overflowY={"scroll"}>
                    {usersToken?.data?.map((user, index) => (
                      <Tr key={index}>
                        <Td
                          fontFamily={"Syne"}
                          fontSize={12}
                          fontWeight={600}
                          color={"brand.initialBackground"}
                        >
                          {user?.name}
                        </Td>
                        <Td
                          fontFamily={"Syne"}
                          fontSize={12}
                          fontWeight={600}
                          color={"brand.initialBackground"}
                        >
                          {user?.phone})
                        </Td>
                        <Td
                          fontFamily={"Syne"}
                          fontSize={12}
                          fontWeight={600}
                          color={"brand.initialBackground"}
                        >
                          {user?.email}
                        </Td>
                        <Td>
                          <Button
                            bg={"rgba(255,124,102,0.25)"}
                            borderWidth={0.5}
                            borderColor={"rgba(255,124,102,0.8)"}
                            height={6}
                            ref={btnRef}
                            onClick={() => {
                              setNumber(user?.token_qty);
                              setId(user?.id);
                              setLink(user.tokens.length !== 0 ? true : false);
                              setTokensArray(user?.tokens);
                              onOpen();
                            }}
                          >
                            <Icon
                              as={MdAssignmentTurnedIn}
                              w={4}
                              height={4}
                              color={"brand.initialBackground"}
                              mr={1}
                              alignSelf={"center"}
                              justifySelf={"center"}
                            />
                            <Text
                              fontFamily={"Syne"}
                              fontSize={12}
                              fontWeight={700}
                              color={"brand.initialBackground"}
                            >
                              ASIGNAR TOKEN
                            </Text>
                            {/* </HStack> */}
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </VStack>
          </Stack>
        </VStack>

        <Modal
          finalFocusRef={btnRef}
          scrollBehavior={scrollBehavior}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent maxH={700}>
            <ModalHeader
              fontFamily={"Syne"}
              fontSize={14}
              fontWeight={800}
              letterSpacing={1}
              color={"brand.initialBackground"}
            >
              ASIGNACIÓN DEL TOKEN
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                {link === true
                  ? tokensArray?.map((element, index) => {
                      return (
                        <HStack w={"100%"} key={index}>
                          <Text
                            fontFamily={"Syne"}
                            fontSize={12}
                            fontWeight={600}
                            color={"brand.secondary"}
                          >
                            ID Token:
                          </Text>
                          <Text
                            fontFamily={"Syne"}
                            fontSize={12}
                            fontWeight={600}
                            color={"brand.secondary"}
                          >
                            {element.token_id}
                          </Text>
                        </HStack>
                      );
                    })
                  : Array.from(Array(number), (_e, index) => {
                      return (
                        <HStack w={"100%"}>
                          <Text
                            fontFamily={"Syne"}
                            fontSize={12}
                            fontWeight={600}
                            color={"brand.secondary"}
                          >
                            ID Token:
                          </Text>
                          <Input
                            fontFamily={"Syne"}
                            fontSize={12}
                            fontWeight={400}
                            height={7}
                            color={"brand.secondary"}
                            w={"80%"}
                            name={"token_id" + index}
                            onChange={(_event) => handleInputChange(_event)}
                            type={"text"}
                          />
                          <small>
                            { valid ? validateMessage(index) :'' }
                          </small>
                        </HStack>
                      );
                    })}
                <span>{message}</span>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <HStack w={"100%"} justify={"space-between"}>
                <Button
                  bg={"red.200"}
                  fontFamily={"Syne"}
                  fontSize={11}
                  fontWeight={700}
                  height={6}
                  color={"red.600"}
                  borderWidth={1}
                  width={"30%"}
                  borderColor={"red.600"}
                  mr={3}
                  alignSelf={"start"}
                  onClick={() => {
                    onClose();
                    setMessage("");
                  }}
                >
                  CANCELAR
                </Button>
                {link !== true ? (
                  <Button
                    bg={"green.200"}
                    fontFamily={"Syne"}
                    fontSize={11}
                    fontWeight={700}
                    height={6}
                    borderWidth={1}
                    borderColor={"green.600"}
                    color={"green.600"}
                    mr={3}
                    width={"34%"}
                    onClick={() => {
                      setInputs([]);
                      setMessage("");
                      dispatch(postTokensIdAsync({ inputs, id }));
                    }}
                  >
                    GUARDAR
                  </Button>
                ) : (
                  <></>
                )}
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    );
}