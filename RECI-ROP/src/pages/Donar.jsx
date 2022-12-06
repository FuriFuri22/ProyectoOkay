import React from "react"

import { InitDonar } from "../Components/InitDonar"
import { SecPeticion } from "../Components/SecPeticion"

import { Row, Col} from 'react-bootstrap'

import { NavbarLogged } from "../Components/NavbarLogged"
import { Scroll } from "../Components/scroll"
import { HistorDonar } from "../Components/HistorDonar"
export const Donar = () =>{


    return(
        <>
        <NavbarLogged/>
        <div >
        <Row>
          <Col><section className="container">
              <InitDonar/>
              
            </section>
          </Col>
          <Col>
              <HistorDonar/>
          </Col>
        </Row>
          
         
        </div>
      </>
    )
}

