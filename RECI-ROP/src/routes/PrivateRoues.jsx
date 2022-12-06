import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext} from '../context/AuthContext'

export const PrivateRoutes = ({children}) => {
  const {user} = useContext(AuthContext)
  return user.logged
          ? <Navigate to='../pages/Donation.jsx' />
          : children
}
//