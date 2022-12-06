import React from 'react'
import SocketPrueba from '../Components/SocketPrueba';
import { NavbarLogged } from './../Components/NavbarLogged';

function Chat() {
  return (
    <>
        <NavbarLogged/>
        <SocketPrueba/>
    </>
  )
}

export default Chat