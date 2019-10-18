import React, {Component } from 'react'
// A React renderer for Three-js: https://github.com/drcmda/react-three-fiber

import './firstpage.css'
import $ from 'jquery'
import ReactAnimatedWeather from 'react-animated-weather';
import Clock from 'react-live-clock';



/** This component sets up a background plane and transitions a group of shapes */


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
          icon: data.currently.icon.toUpperCase().replace(new RegExp("-", "g"), "_"),
        },_=>{
          that.setState({

            isLoaded: true
          })
        })
        console.log(that.state.icon.replace(new RegExp("-", "g"), "_"))
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
        'animation': 'loading 0.7s ease-in forwards'
      })
      $('.welcome-text .slogan h1#slogan1').css({
        'opacity':'1',
        'animation':'loading 0.7s ease-in forwards'})
        setTimeout(_=>{
          $('.welcome-text .slogan h1#slogan2').css({
            'opacity': '1',
            'animation': 'loading 0.7s ease-in forwards'
          })          
          setTimeout(_=>{
            $('.welcome-text .slogan h1#slogan3').css({
              'opacity': '1',
              'animation': 'loading 0.7s ease-in forwards'
            })   
            setTimeout(_ => {
              $('.welcome-text .slogan h1#slogan4').css({
                'opacity': '1',
                'animation': 'loading 0.7s ease-in forwards'
              })
              setTimeout(_ => {
                $('.welcome-text .slogan h1#slogan5').css({
                  'opacity': '1',
                  'animation': 'loading 0.7s ease-in forwards'
                })
                setTimeout(_ => {
                  $('.main img').css({
                    'opacity': '1',
                    'animation': 'loading 0.7s ease-in forwards'
                  })
                }, 900) 
              }, 900)   
            },900)     
          },900)
        },900)
    },900)
  }
  render() {

  return (
    <div className="main">
     
      <div className="home-page-container">
        <div className="home-page-left">
        
          <div className="weather" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh',width:'220px'}}>
           
            {this.loadResourse()}
          </div>
         
          <div className="welcome-text">
            <div className="slogan">
              <h1 id="slogan1">I EAT</h1>
              <h1 id="slogan2">CODE</h1>
              <h1 id="slogan3">SLEEP</h1>
              <h1 id="slogan4">&#38;</h1>
              <h1 id="slogan5">REPEAT</h1>
            </div> 
            <div>
              <p><span>What I do?</span></p>
            </div>
            {/* <div className="welcome-details">
              <p>I'm Rikesh Shrestha working as a web and mobile developer, Also tech-enthusiast like to update in future technology.</p>
            </div> */}
          </div>
        </div>
          <div className="main-image">
          {/* <div style={{ textAlign: 'left', position: 'absolute', top: '0%' }}>
            <h1>Hello</h1>
            <h2>I'm Rikesh</h2>
            <h3>I'm a Web and Mobile developer</h3>
          </div> */}
            <img src="./images/test.png" alt='main'></img>
          </div>
      </div>
    </div>
  )
  }
}