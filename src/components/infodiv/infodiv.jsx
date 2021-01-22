import React from 'react'
import "./infodiv.css"
import {Container} from 'react-bootstrap'
function Infodiv(props){
   return(
      <Container className="info-div">
         {props.children}
      </Container>
   )
}
export default Infodiv;