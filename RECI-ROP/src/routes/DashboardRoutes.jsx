/*
import React from "react"
import { Route, Routes } from "react-router-dom"
import { DonarContext } from "../context/DonarContext"
import { Inicio } from "../pages"
import { Donar } from "../pages/Donar"


export const DashboardRouter = () => {

    const [donacion, setDonacion]  = useState([])

    
    
    return (
        <DonarContext.Provider value={{
            donacion,
            setDonacion
        }} >
            <Routes>
                <Route path='/Donar' element={<Donar/>} />
                <Route path='/Recibir' element={<Recibir />} />
               { /*<Route path='/focus-ref' element={<FocusScreen />} />
                <Route path='/chat' element={<ChatScreen />} />

                <Route path='/' element={<Inicio />} />
            </Routes>
        </DonarContext.Provider>
    )
}
*/