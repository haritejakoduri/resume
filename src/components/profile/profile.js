import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import './profile.css'
function Profile(){
   return(
      <Container className='card'>
         <Row>
            <Col lg={6} md={5} xl={5} sm={5} xs={5}>
               <Image src="https://haritejakoduri.github.io/resume/photo.jpg" className="card-img" style={{height:"100px"}} />
            </Col>
            <Col lg={7} md={7} xl={7} sm={7} xs={7}>
               <h3 className="initial">Koduri</h3>
               <h2 className="name">HariTeja</h2>
               <h4 className="prof">JavaScript developer</h4>
            </Col>
         </Row>
      </Container>
   )
}
export default Profile;