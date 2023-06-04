import React from 'react';
import { useMetaMask } from "metamask-react";
import { Button, Alert, AlertIcon } from '@chakra-ui/react'

export default function Metamask () {

  const { status, connect} = useMetaMask();
    
    if (status === "initializing") return <Alert status='info'><AlertIcon />Sincronizando con metamask</Alert>

    if (status === "unavailable") return <Alert status='error'><AlertIcon />Por favor instala la extension de metamask</Alert>

    if (status === "notConnected") return <Button onClick={connect}>Conectar a metamask</Button>

    if (status === "connecting") return <Alert status='info'><AlertIcon /> Conectando...</Alert>

    if (status === "connected") return <Alert status='success'><AlertIcon /> Conectado con metamask</Alert>

    return null;
}
  