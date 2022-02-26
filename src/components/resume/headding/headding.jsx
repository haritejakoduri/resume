import React from 'react'
import {Container} from 'react-bootstrap'
import "./headding.css"
function Headding(props){
   return(
      <Container className="head">
         <div className="head-thing">
               <h1>{props.headding}</h1>
         </div>
      </Container>
   )
}
export default Headding;