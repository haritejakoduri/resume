import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import './profile.css'
function Profile(){
   return(
      <Container className='card'>
         <Row>
            <Col lg={6} md={6} xl={6} sm={6} xs={6}>
               <Image src="https://haritejakoduri.github.io/resume/photo.jpg" className="card-img" style={{height:"100px"}} />
            </Col>
            <Col lg={6} md={6} xl={6} sm={6} xs={6}>
               <h3 className="initial">Koduri</h3>
               <h2 className="name">HariTeja</h2>
               <h4 className="prof">JavaScript developer</h4>
            </Col>
         </Row>
      </Container>
   )
}
export default Profile;