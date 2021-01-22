import React from 'react'
import {Container} from 'react-bootstrap'
import './details.css'
function Details(props){
   return(
      <Container className="details">
         <h1 className="company">{props.company ||props.course}</h1>
         <h3 className="role">{props.role||props.collage}</h3>
         <h5 className="duration">{props.duration}</h5>
         <p className="text">{props.text}</p>
      </Container>
   )
}
export default Details;