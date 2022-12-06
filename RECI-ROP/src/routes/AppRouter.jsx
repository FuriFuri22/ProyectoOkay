import { BrowserRouter, Route, Routes } from "react-router-dom"

import "../App.css"
import { PublicRoutes } from "./PublicRoutes";

import {Iniciosesion, Registro,Inicio} from '../pages/';
import { Donar } from "../pages/Donar"
import { PrivateRoutes } from "./PrivateRoues"



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={

          <PublicRoutes>           
              <Iniciosesion/>   
            </PublicRoutes>
        } />

        <Route path="/Donar" element={
          <Donar />
        }/>

        <Route path='/*' element={
            <Inicio/>
          // Proteger las rutas privadas
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            {/*<Donar/>*/}
          </PrivateRoutes>
       }/>
       <Route path="/*" element={
           <PublicRoutes>  
             <Inicio/>
            </PublicRoutes>
        } />

        <Route path='/Registro' element={
          <Registro />
        } />

       

        <Route path='/*' element={
          <Inicio />
          // Proteger las rutas privadas
        } />

    </Routes>
    </BrowserRouter >
  )
}