
import React from "react"
import {Navbar, Carousel} from "../Components/"
import { Intro } from "../Components/Intro"
export const Inicio=()=> {
  return (
    <>
      <Navbar/>
      <Carousel/>

      <Intro/>

     <section class="container-fluid text-warning">
    <div class="row w-75 mx-auto mb-1 servicio_fila">

        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono_wrap">
            <img src="/donaciones.jpeg" alt="donaciones" width="180" height="175"/>
            <div>
                <h3 class="fs-4 mt-3 px-4 pb-0 text-light">Donaciones</h3>
                <p class="px-2 mx-3">Nuestra empresa recolecta donativos para brindar una ayuda a quien lo necesite. 
                    Esto gracias a los donativos de personas y/o empresas.
                </p>
            </div>
        </div>
        

        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono_wrap">
            <img src="/publicidad - copia.jpeg" alt="publicidad" width="180" height="175"/>
            <div>
                <h3 class="fs-4 mt-3 px-4 pb-1 text-light">Publicidad</h3>
                <p class="px-2 mx-3">Nuestra empresa tambien brinda propaganda a las empresas que aporten a nuestra causa. Buscamos el beneficio mutuo para todo publico</p>
            </div>
        </div>

    </div>
</section>
<section>
    <div class="w-75 m-auto text-center " id="equipo">
        <h1 class="mb-5 fs-2">Equipo pequeño <span class="text-danger">con Grandes Resultados</span>
        </h1>
        <div class="mt-5 mb-5 w-50 d-block mx-auto " >
          <p class="fs-4">
            Buscamos una <span class="text-danger">solución</span> para todos
        </p>
          <img class="img-fluid " src="/grupo.jpeg" alt="grupo"/>
        </div>
    </div>
    
</section>

    </>
  )
}
