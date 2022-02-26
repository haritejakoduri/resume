import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import './skill.css'
function Skill(){
   return(
      <Container className="skill-container">
         <Row style={{"text-align":"center"}}>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="html" src="https://haritejakoduri.github.io/resume/learned/htm564.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="css" src="https://haritejakoduri.github.io/resume/learned/css364.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="Java Script" src="https://haritejakoduri.github.io/resume/learned/js64.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="Bootstrap" src="https://haritejakoduri.github.io/resume/learned/Bootstrap.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="React" src="https://haritejakoduri.github.io/resume/learned/react64.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="NodeJS" src="https://haritejakoduri.github.io/resume/learned/node64.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="Express" src="https://haritejakoduri.github.io/resume/learned/Expressjs.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="Mongodb" src="https://haritejakoduri.github.io/resume/learned/mongodb64.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="VueJS" src="https://haritejakoduri.github.io/resume/learned/vuejs.png" rounded />
            </Col>
            <Col sm={3} md={3} lg={3} xs={3}>
               <Image className="skill-img" title="MySQL" src="https://haritejakoduri.github.io/resume/learned/mysql.png" rounded />
            </Col>
         </Row>
      </Container>
   )
}
export default Skill;