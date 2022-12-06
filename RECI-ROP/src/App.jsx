import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {AuthContext} from './context/AuthContext'
import { AppRouter } from './routes/AppRouter'
import { authreducer1 } from './reducers/Authreducer1'


function App() {
const usuario={
  username:'sofi',
  isLogged:true
}
  const [user, dispatch] = useReducer(authreducer1,usuario)

  const [logged, setLogged] = useState('')
  return (
    <AuthContext.Provider
    value={{
     user, dispatch, logged, setLogged
    }}>
    <AppRouter/>
    </AuthContext.Provider>
)}

export default App
