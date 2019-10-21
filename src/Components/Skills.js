import React, { Component } from 'react'
import './skills.css'
import $ from 'jquery'
export default class Skills extends Component {
    constructor(){
        super();
        this.state={
            framework:'Do you want to know which framework i use?'
        }
    }
    componentDidMount(){
        setTimeout(_=>{
            $('.skill-container').fadeIn('3000')
        },2000)
      
          $('.skills .meter').fadeIn()
          setTimeout(_=>{

              $('.skills .meter span.html').css('width','97%')
              $('.skills .meter span.javascript').css('width', '84%')
              $('.skills .meter span.java').css('width', '80%')
              $('.skills .meter span.illustrator').css('width', '77%')
              $('.skills .meter span.photoshop').css('width', '78%')
              $('.skills .meter span.xd').css('width', '90%')
          },1000)
    
      $('.stack').hover(_=>{
          $('.st1').css('top','-3px')
          $('.st2').css('top', '-5px')
          $('.st3').css('top', '-7px')
         
          $('.st4').css('top', '0')
      },_=>{
            $('.st1').css('top', '0')
              $('.st2').css('top', '0')
              $('.st3').css('top', '0')

              $('.st4').css('top', '0')

      })
      $('.stack').click(_=>{
        // $('.skills .skills-container').slideUp()
        // $('.skills .framework-container').fadeIn()
        // setTimeout(_=>{
        //     $('.skill-container .skill-left img').fadeOut()
            
        // },500)
        
          $('.skills-container').slideUp()
            this.setState({
                framework:'FrameWorks'
            })
      })
    }
    render() {
        return (
             <div className="skill-container">
                    <div className="skill-left">
                        <svg  viewBox="0 0 240 225">
                            <path fill="#EEEBE4">
                                <animate
                                    attributeName="d"
                                    dur="8s"
                                    repeatCount="indefinite"
                                    values="M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97
                                    c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;
                                M123.63,4.78C41.5,14.05,16.11-16.94,13.02,15.7C3,121.55,0.78,223.54,63.69,188.97c86.31-47.42,155.03-3.67,172.27-78.99C247.5,59.55,219.5-17.95,123.63,4.78z;M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;	
                                            M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;">
                                </animate> 
                            </path>
                    </svg>
                        <img src="./images/about.png" alt='..'></img>
                    </div>
                    <div className="skill-right">
                        <div className="divider"></div>  
                    <div className="skills" id="skill">
                        <div className="skills-container">
                            <div className="heading">
                                <h1>Skills that i have so far</h1>
                            </div>
                            <div className="margin-bottom">
                                <span>Html/css</span>
                                <div class="meter">
                                    <span className="html" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Javascript</span>
                                <div class="meter">
                                    <span className="javascript" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Java</span>
                                <div class="meter">
                                    <span className="java" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Illustrator</span>
                                <div class="meter">
                                    <span className="illustrator" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Photoshop</span>
                                <div class="meter">
                                    <span className="photoshop" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>XD</span>
                                <div class="meter">
                                    <span className="xd" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="framework-container">
                            <div className="margin-bottom">
                                <span>Html/css</span>
                                <div class="meter">
                                    <span className="html" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Javascript</span>
                                <div class="meter">
                                    <span className="javascript" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Java</span>
                                <div class="meter">
                                    <span className="java" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Illustrator</span>
                                <div class="meter">
                                    <span className="illustrator" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>Photoshop</span>
                                <div class="meter">
                                    <span className="photoshop" style={{ "width": "0%" }}></span>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <span>XD</span>
                                <div class="meter">
                                    <span className="xd" style={{ "width": "0%" }}></span>
                                </div>
                            </div>

                        </div>
                        <div className="sub-head">
                            <h2>{this.state.framework}</h2>
                            <div className="stack">
                                <span className='stack-button st1' style={{ background: '#000' }}></span>
                                <span className="stack-button st2" style={{ background: '#ccc' }}></span>
                                <span className="stack-button st3" style={{ background: '#aaa' }}></span>
                                <span className="stack-button st4" style={{ background: '#fff' }}></span>
                            </div>
                            {/* <div className="stack-button1"></div> */}
                        </div>
                    </div>
                    </div>                   
                </div> 
          
        )
    }
}
