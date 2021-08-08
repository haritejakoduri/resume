import React from 'react'
import Container from './components/container/container'
import Layout from './components/layout/layout'
import Column from "./components/col/column"
import Profile from "./components/profile/profile"
import Contact from "./components/contact-info/contact"
import Headding from './components/headding/headding'
import Details from './components/details/details'
import Skill from './components/skills/skills'
import './index.css'
function App(){
   return(<Container>
      <Layout>
      <Column name="left">
         <Profile />
         <Contact />
      </Column>
      <Column name="right">
         <Headding headding="EXPERIENCE"/>
         <Details 
            company="Auction Software"
            role="FullStack Web Developer"
            duration="Mar-2021 to present"
            text ="Working as a fullstack developer"
         />
         <Details 
            company="Codegnan"
            role="FullStack Web Developer"
            duration="Nov-2019 to May-2020 7months"
            text ="Worked as a fullstack developer. during this period of time process i have learned new things and new packages in Node.js."
         />
         <Headding headding="EDUCATION"/>
         <Details 
            course="Bachelor of Engineering in Computer Science"
            collage="Malineni Perumallu"
            duration="Apr-2016 to May-2020"
            text ='During this period, I have participated in many hackathons. I have won first place in three hackathons two in my college and one hackathon in KLU. also Participated in IBC got 10th place among the 50 teams around the globe. College taught me one thing. "Learn your self and Do your self "'
         />
         <Details 
            course="Intermediate"
            collage="Nirmala collage"
            duration="Apr-2014 to Mar-2016"
            text ='During this period, I shared my computer knowledge to 10th class students in a coaching center.'
         />
         <Details 
            course="SSC"
            collage="ZPHS mandadam"
            duration="Apr-2010 to Mar-2014"
            text ='During this period, I wrote my first hello world program in c laguage also completed PGDCA course.'
         />
         <Headding headding="MY SKILLS"/>   
         <Skill/>   
      </Column>
      
      </Layout>
   </Container>)
}
export default App;