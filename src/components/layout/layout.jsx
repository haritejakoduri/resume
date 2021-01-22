import React from 'react'
import {Container,Row} from 'react-bootstrap'
class Layout extends React.Component{
   constructor(props){
      super()
      this.props=props
   }
   render(){
   return(
      <Container >
         <Row>
            {this.props.children}
         </Row>
      </Container>
   )}
}
export default Layout;