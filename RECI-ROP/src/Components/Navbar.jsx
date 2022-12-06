import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar= (props)=>{
    const{Saludo}=props
    return (
       <header>
       <nav className="navbar navbar-expand-lg  p-2 blankito" id="menu_barra">
        <div className="container-fluid">

        <NavLink className="navbar-brand" to="/Inicio" id="ReciRop"><strong>Reci<span className="text-danger">Rop</span></strong></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/Inicio">Incio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuario
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/login">Iniciar Sesion</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Registro">Registrarse</NavLink></li>
                <li><h1 className="dropdown-divider"></h1></li>
                <li><NavLink className="dropdown-item">Necesitas ayuda?</NavLink></li>
                <li><h1>{Saludo}</h1></li>
              </ul>
            </li>

            </ul>
          </div>
        </div>
      </nav>
       </header>
    )
}
