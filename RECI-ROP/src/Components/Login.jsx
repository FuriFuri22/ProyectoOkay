


import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { diccionario} from "../auxs/library";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  
  const  { logged, setLogged }  = useContext(AuthContext);

  const handlechange=({target})=>{
    setFormData({
      ...formData,[target.name]: target.value
    })
    console.log(formData)
  }
 const postuser=async(e)=>{
    e.preventDefault();


  const userlogged = await diccionario.iniciarSesion(formData.username, formData.password);
  console.log(userlogged)
  setLogged(userlogged.token)
}
 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <div className=" card container">
        <form className="form" onSubmit={postuser}>
          <ul>
            <li>
              <label htmlFor="name" className="form-label">
                Nombre de Usuario:
              </label>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="username"
                  onChange={handlechange}
                ></input>
              </div>
            </li>

            <li>
              <label className="form-label" htmlFor="password">Contraseña</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handlechange}
                ></input>
              </div>
            </li>
          </ul>
          <button type="submit" >enviar</button>
        </form>
      </div>
    </>
  );
};
