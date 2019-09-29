import React, { useState, useEffect} from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber'
// A React x-platform animation library: https://github.com/react-spring/react-spring
import { useSpring, a } from 'react-spring/three'
import { svgs, colors, deg } from './resource/helpers'
import Homepage from './Homepage';
import Aboutme from './Aboutme'
import Contactme from './Contactme'
import NavBar from './Components/navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function Scene() {
  const [page, setPage] = useState(0)
  const [setShapes] = useState([])
  // Switches scenes every 4 seconds
  useEffect(() => void setInterval(() => setPage(i => (i + 1) % svgs.length), 5000), [])
  // Converts current SVG into mesh-shapes: https://threejs.org/docs/index.html#examples/loaders/SVGLoader
  useEffect(() => void svgs[page].then(setShapes), [page])
  // This spring controls the background color animation
  const { color } = useSpring({ color: colors[page] })
  // This one is like a transition group, but instead of handling div's it mounts/unmounts meshes in a fancy way

  return (
    <>
      <mesh scale={[20000, 20000, 1]} rotation={[0, deg(-10), 0]}>
        <planeGeometry attach="geometry" args={[1, 1]} />
        <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
      </mesh>

    </>
  )
}

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
        <Canvas className="homeCanvas" invalidateFrameloop camera={{ fov: 90, position: [0, 0, 1800], rotation: [0, deg(-20), deg(180)], near: 0.1, far: 20000 }}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.5} position={[300, 300, 4000]} />
          <Scene />
        </Canvas>
       
        <Router>
          <NavBar loaderIsHidden={this.state.loaderIsHidden}></NavBar>
          <Route exact path='/' component={Homepage}/>
          <Route path='/contact' component={Contactme}/>
          <Route path='/about' component={Aboutme} />
        </Router>
        {/* <Homepage></Homepage> */}
        
        {/* <Loader loaderIsHidden={this.loaderIsHidden}></Loader> */}
        
        {/* <HashRouter style={{ width: '100%' ,height:'100%'}}>
          
          <div style={{width:'100%'}}>
            <NavBar loaderIsHidden={this.state.loaderIsHidden}></NavBar>
            <Route path="/about"  component={Aboutme} />
            <Route path="/" exact component={_=><Homepage loaderIsHidden={this.state.loaderIsHidden}></Homepage>}  />
            <Route path="/contact" component={Contactme} />
            <Route path='/test' component={TestClass}/>
          </div>
        </HashRouter> */}
      </div>
    )
  }
}
export default App;
