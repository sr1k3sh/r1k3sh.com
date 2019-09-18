import React from 'react';
import Loader from './Loader'
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Homepage from './Homepage';
import Aboutme from './Aboutme';
import Contactme from './Contactme';
import NavBar from './Components/navBar';
import TestClass from './TestClass'

// import * as THREE from 'three';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      loaderIsHidden:true
    }
    this.loaderIsHidden=this.loaderIsHidden.bind(this)
  }
  componentDidMount(){


  }
  loaderIsHidden(){
    const that = this
    setTimeout(function(){
      console.log('after 10')
      that.setState({
        loaderIsHidden:true
      })
    },1000)
  }
  render(){
 
    return(
      <div className="container" style={{display:'flex',justifyContent:'center',height:'100vh'}}>
        {/* <Loader loaderIsHidden={this.loaderIsHidden}></Loader> */}
        
        <HashRouter style={{ width: '100%' ,height:'100%'}}>
          
          <div style={{width:'100%'}}>
            <NavBar loaderIsHidden={this.state.loaderIsHidden}></NavBar>
            <Route path="/about"  component={Aboutme} />
            <Route path="/" exact component={_=><Homepage loaderIsHidden={this.state.loaderIsHidden}></Homepage>}  />
            <Route path="/contact" component={Contactme} />
            <Route path='/test' component={TestClass}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default App;
