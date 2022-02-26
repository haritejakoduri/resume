import React from 'react'
import './container.css'
class Container extends React.Component{
   constructor(props){
      super();
      this.props=props
   }
   render(){
      return(
         <div className="main-div">
            {this.props.children}
         </div>
      )
   }
}
export default Container;