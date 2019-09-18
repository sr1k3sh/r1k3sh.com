import React, { useState, useEffect, Component } from 'react'
// A React renderer for Three-js: https://github.com/drcmda/react-three-fiber
import { Canvas } from 'react-three-fiber'
// A React x-platform animation library: https://github.com/react-spring/react-spring
import { useTransition, useSpring, a } from 'react-spring/three'
import { svgs, colors, deg, doubleSide } from './../resource/helpers'
import './firstpage.css'
import $ from 'jquery'
import ReactAnimatedWeather from 'react-animated-weather';
import Clock from 'react-live-clock';



/** This component sets up a background plane and transitions a group of shapes */
function Scene() {
  const [page, setPage] = useState(0)
  const [shapes, setShapes] = useState([])
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
      {/* <group position={[1600, -700, page]} rotation={[0, deg(180), 0]}>
        {transitions.map(({ item, key, props }) => (
          <Shape key={key} {...item} {...props} />
        ))}
      </group> */}
    </>
  )
}

/** Main component */
export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
      isLoaded: false,
      value: '',
      currently:'',
      icon:'',
      temperature:'',
      longitude:'',
      latitude:''
    }
  }
  componentWillMount() {
    let that = this
    if (navigator.geolocation && !this.state.isLoaded) {
      // Call getCurrentPosition with success and failure callbacks
      navigator.geolocation.getCurrentPosition(this.success, this.fail);
     
    }
    else {
      alert("Sorry, your browser does not support geolocation services.");
    }
    
   
  }
  weatherLoad=()=>{
    let that = this
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: `https://api.darksky.net/forecast/8adaa664d67a4ecfcc5aff8a99260f16/${this.state.latitude},${this.state.longitude}`,
      success: function (data) {
        that.setState({
          
          value: data,
          currently:data.currently,
          temperature: data.currently.temperature +' °F',
          icon:data.currently.icon.toUpperCase(),
        },_=>{
          that.setState({

            isLoaded: true
          })
        })
        console.log(that.state.value)
        // $.each(data, function (key, val) {
        // });

      },
      errror: (err) => {
        console.error(err)
      }
    })
  }
  success=(position)=> {     
    this.setState({
      isLoaded:true,
      latitude: Math.round(position.coords.latitude*100)/100 ,
      longitude: Math.round(position.coords.longitude*100)/100
    })
    console.log(this.state.latitude,this.state.longitude)
  
  this.weatherLoad()
  
  }

  fail=()=> {
    console.log('sorry')
    // Could not obtain location
  }
  loadResourse = () => {
    
    
    if (!this.state.isLoaded)
      return <div className="spinner"></div>
    else
      var icon = this.state.icon 
      return (
      <div className="weather-container" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <div className="weather-field">
            <h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={this.state.value.timezone} />
            </h1> 
            <h3>{this.state.value.timezone}</h3>
            <h4>{this.state.temperature} </h4>
          </div>
          <div className="weather-icon">   
            {<ReactAnimatedWeather
              icon={icon}
              color={'#fff'}
              size={100}
              animate={true}
            />}
          </div>
      </div>
      )
  }
  componentDidMount(){
  
    setTimeout(_=>{
      $('.weather .weather-container .weather-field').css({
        'opacity': '1',
        'animation': 'loading 2s ease-in forwards'
      })
      $('.welcome-text h1').css({
        'opacity':'1',
        'animation':'loading 2s ease-in forwards'})
        setTimeout(_=>{
          $('.welcome-text p,.main .welcome-text .welcome-details').css({
            'opacity': '1',
            'animation': 'loading 2s ease-in forwards'
          })
          setTimeout(_=>{
            $('.main img').css({
              'opacity': '1',
              'animation': 'loading 2s ease-in forwards'
            })
          },2000)
        },2000)
    },2000)
  }
  render() {

  return (
    <div className="main">
      <Canvas className="homeCanvas" invalidateFrameloop camera={{ fov: 90, position: [0, 0, 1800], rotation: [0, deg(-20), deg(180)], near: 0.1, far: 20000 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Scene />
      </Canvas>
      <div className="welcome-text">
        <h1>Hello!!</h1>
        <div className="welcome-details">
          <p className="drop-cap">I'm rikesh Shrestha working as a web and mobile developer,Also tech-enthusiast like to update in future technology.</p>
        </div>
      </div>
      <div className="main-image">
      
        <img src="./images/test.png" alt='main'></img>
      </div>
      <div className="weather" style={{display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',top:'10%',left:'5%',width:'220px'}}>

        {this.loadResourse()}
        
        {/* <MoodCheck /> */}
      </div>
    </div>
  )
  }
}