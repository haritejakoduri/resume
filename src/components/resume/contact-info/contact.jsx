import React from 'react'
import {Container,Button,Row,Col} from 'react-bootstrap'
import Infodiv from '../infodiv/infodiv'
import "./contact.css"
function Contact(){
 return(
 <Container>
   <Infodiv>
      <Container className="container-detail">
      <img src="https://haritejakoduri.github.io/resume/icons/mail.png" alt="mail"/>
      <a href="mailto:haritejakoduri1234@gmail.com" className="contact-link">haritejakoduri1234@gmail.com</a>
      </Container>
   </Infodiv>
   <Infodiv>
      <Container>
      <img src="https://haritejakoduri.github.io/resume/icons/location.png" alt="mail"/>
      <a href="#location" className="contact-link">Vijayawada</a>
      </Container>
   </Infodiv>
   <Infodiv>
      <Container>
      <h3>Industry Knowledge</h3>
      <ul className="ul-knowledge">
         <li>Web Design</li>
         <li>Web Development with React</li>
         <li>Mobile App Development with React-Native</li>
         <li>Backend API Development with Node.js</li>
         <li>MongoDB Database Design</li>
         <li>GIT</li>
         <li>Linux Shell</li>
      </ul>
      </Container>
   </Infodiv>
   <Infodiv>
      <Container>
      <h3>Languages</h3>
      <Container><p><b>English</b> &#9733; &#9733; &#9733; &#9733; &#9734;</p></Container>
      <Container><p><b>Telugu  </b>&#9733; &#9733; &#9733; &#9733; &#9734;</p></Container>
      <Container><p><b>Hindi   </b>&#9733; &#9733; &#9734; &#9734; &#9734;</p></Container>
      </Container>
   </Infodiv>
   <Infodiv>
      <Container>
      <h3>Social</h3>
      <a href="https://www.linkedin.com/in/hariteja-koduri" className="contact-link">linkedin/haritejakoduri</a>
      <br/>
      <br/>
      <a href="https://www.facebook.com/hari.koduri.73/" className="contact-link">facebook/haritejakoduri</a>
      </Container>
   </Infodiv>
      <Container>
      <Button className="button-style"><h3>Hobbies</h3></Button>
      <Container>
         <Row>
            <Col md={3} sm={3} xs={3} className="hobbie-block">
               <img src="https://haritejakoduri.github.io/resume/icons/book.png" alt="reading" className="hobbies-img"/>
               <br/>
               <h4>Reading</h4>
            </Col>
            <Col md={3} sm={3} xs={3} className="hobbie-block">
            <img src="https://haritejakoduri.github.io/resume/icons/visual-studio.png" alt="reading" className="hobbies-img"/>
               <br/>
               <h4>Coding</h4>
            </Col>
            <Col md={3} sm={3} xs={3} className="hobbie-block">
            <img src="https://haritejakoduri.github.io/resume/icons/controller.png" alt="reading" className="hobbies-img"/>
               <br/>
               <h4>Gaming</h4>
            </Col>
            <Col md={3} sm={3} xs={3} className="hobbie-block">
            <img src="https://haritejakoduri.github.io/resume/icons/traveling.png" alt="reading" className="hobbies-img"/>
               <br/>
               <h4>Traveling</h4>
            </Col>
         </Row>
      </Container>
      </Container>
 </Container>
 )
}
export default Contact;