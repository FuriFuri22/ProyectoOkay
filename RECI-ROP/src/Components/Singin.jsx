import React from "react";
import { useState } from "react";
import { diccionario } from "../auxs/library";
export const Singin = () => {

  
  const handlechange=({target})=>{
    setFormData({
      ...formData,[target.name]: target.value
    })
    console.log(formData)
  }
 const postuser=async(e)=>{
  
   
    e.preventDefault();

  const newUser = await diccionario.createUser(formData.username, formData.email, formData.password)
  console.log(newUser)
    }
 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <form className="form blankito" action="/my-handling-form-page" onSubmit={postuser}>
        <ul>
          <li>
            <label htmlFor="name" className="form-label">Nombre:</label>
           <div className="">
             <input className="form-control"
              type="text"
              id="name"
              name="username"
              onChange={handlechange}
              
            ></input>
            </div>
          </li>
          <li>
            <label htmlFor="mail" className="form-label">Correo electrónico:</label>
           <div > 
            <input className="form-control"
              type="email"
              id="mail"
              name="email"
              onChange={handlechange}
            ></input>
            </div>
          </li>
          <li>
            <label htmlFor="password" className="form-label">Contraseña</label>
            <div>
              <input 
              type="password"
              className="password form-control"
              name="password"
              onChange={handlechange}
            >
            </input>
            </div>
          </li>
        </ul>
        <button type="submit" className="btn btn-outline-dark">
          enviar
        </button>
      </form>
    </div>
  );
};




