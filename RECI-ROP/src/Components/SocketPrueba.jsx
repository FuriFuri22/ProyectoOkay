import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
function SocketPrueba() {
    const socket = io('http://localhost:4000')

    const [ msg, setMsg] = useState('')
    const [ mensajes, setMensajes] = useState([])
    useEffect(() => {
      const recibirMensaje = (msg) => setMensajes([msg, ...mensajes]);
      socket.on('mensaje', recibirMensaje)

      return () => socket.off('mensaje', recibirMensaje)
    }, [mensajes])
    

    const HandleSubmit = (e) => {
      e.preventDefault();
      socket.emit('mensaje', msg)
      const newMensaje = {
        body: msg,
        de: 'Yo'
      }
      setMensajes([newMensaje, ...mensajes])
      setMsg('')
    }
  return (
    <div>
      <div className='btn btn-light h-75' id='centrar'>
          <div className='blankito h-75 overflow-auto'>
            <br />
            {mensajes.map((msg, index) => (
              <div key={index} className={(msg.de == 'Yo')?"bg-success text-white":"bg-dark text-white"} id={(msg.de !== 'Yo')?"yo":"otro"}>
                <h6 id='text'>{(msg.de) == 'Yo'?msg.de:'Otro usuario'}: {msg.body}</h6>
              </div>
            ))}
          </div>
          <form onSubmit={HandleSubmit}>
            <br />
            <input className='form-control' type="text" onChange={(e)=>{setMsg(e.target.value)}} value={msg}/><br />
            <button className='btn btn-dark' type='submit'>Enviar</button>
          </form>
      </div>
    </div>
  )
}

export default SocketPrueba