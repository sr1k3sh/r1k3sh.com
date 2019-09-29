import React, { Component } from 'react'
import './skills.css'
import $ from 'jquery'
export default class Skills extends Component {
    componentDidMount(){
      $('.next').click(_=>{
          $('.skills .meter').fadeIn()
          setTimeout(_=>{

              $('.skills .meter span.html').css('width','97%')
              $('.skills .meter span.javascript').css('width', '84%')
              $('.skills .meter span.java').css('width', '80%')
              $('.skills .meter span.illustrator').css('width', '77%')
              $('.skills .meter span.photoshop').css('width', '78%')
              $('.skills .meter span.xd').css('width', '90%')
          },1000)
      })
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
        $('.skills .skills-container').slideUp()
        $('.skills .framework-container').fadeIn()
        setTimeout(_=>{
            $('.skill-container .skill-left img').fadeOut()
            
        },500)
      })
    }
    render() {
        return (
            <div className="skills">
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
                    <h2>Do you want to know which framework i use?</h2>
                    <div className="stack">    
                        <span className='stack-button st1' style={{background:'#000'}}></span>
                        <span className="stack-button st2" style={{ background: '#ccc' }}></span> 
                        <span className="stack-button st3" style={{ background: '#aaa' }}></span> 
                        <span className="stack-button st4" style={{ background: '#fff' }}></span>                  
                    </div>
                    {/* <div className="stack-button1"></div> */}
                </div>
            </div>
        )
    }
}
