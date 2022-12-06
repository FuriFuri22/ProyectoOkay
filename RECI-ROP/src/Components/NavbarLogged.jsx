import React from "react";
import {NavLink } from "react-router-dom";

export const NavbarLogged = () =>{
 
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg  p-2 blankito">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Inicio" id="ReciRop"><strong>Reci<span className="text-danger">Rop</span></strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Inicio"><strong>Inicio</strong> </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Modo
                                </NavLink>
                                <ul className="dropdown-menu blankito" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/Donar">Modo Donador</NavLink></li>
                                    <li><h1 className="dropdown-divider"></h1></li>
                                    <li><NavLink className="dropdown-item" to="/Recibir">Modo Receptor</NavLink></li>
                                    <li><h1 className="dropdown-divider"></h1></li>
                                    <li><NavLink className="dropdown-item" to='/Foro'>Modo Neutral</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}