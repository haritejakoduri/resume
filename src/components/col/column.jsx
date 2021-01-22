import React from 'react'
import {Col} from 'react-bootstrap'
import "./column.css"
function Column(props){
   return(
      <Col lg={6} sm={12} md={6} >
         <div className={props.name}>{props.children}</div>
      </Col>
      )
}
export default Column;