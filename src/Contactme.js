import React, { Component } from 'react'
import './contact.css'
import $ from 'jquery'
export default class Contactme extends Component {
    constructor(){
        super();
        this.state={
            breadCrumb:'Details',
            scrollUpCount: 0,
            scrollDownCount: 0
        }
    }
    componentDidMount(){
       
            $('.contact-box').css('display','flex')
      
        setTimeout(_=>{
            $('.sentence').css('opacity', 1)
            this.sentenceAnimation()
            
            setTimeout(_ => $('.know-more').css('animation', 'fade 1s ease-in forwards'),1000)
        },1400)
        $('.know-more').click(_=>{
            $('.cls-6').removeClass('middle-line').addClass('reverse-line');
            this.sentenceAnimation()
            $(".sentence span").each(function (index) {
                $(this).css({'animation-direction':'alternate-reverse',
            'animation-duration':'200ms'})})
            $('.know-more').css('animation','fadeout 2s ease-out forwards')
            $('#ellipse1').css('animation','ecllipseafterTranslate 3s ease-out forwards')
            $('#ellipse2').css('animation', 'ecllipseafterTranslate 3s ease-out reverse forwards')
            setTimeout(_=>{
                $('#ellipse2 h3').css({'display':'block','line-height':'0'})
                $('#ellipse2 h2').css('display', 'block')
                $('#ellipse2 .profile-picture').css({
                    'width':'20%','height':'20%'
                })
                $('#ellipse2 .contact-details-section-social').css('display', 'flex')
                $('#ellipse2 .next').css('display', 'flex')
                $('#ellipse2 .slider').css('display', 'flex')
            },2500)
        })
        $('#c_next').click(_=>{
            this.handleNext()
            
        })
        $('#c_prev').click(_ => {
           
        })
        $('#ellipse2').bind('mousewheel', (e)=> {
           
            if (e.originalEvent.wheelDelta / 120 > 0) {
                setTimeout(_ => this.handlePrev(), 200)
            }
            else {
                setTimeout(_ => this.handleNext(), 200)
                
            }
        });
       
        
    }
    handleNext=()=>{
        $('#ellipse2 .slider .slides').animate({ 'left': this.state.breadCrumb === 'Skills' ? '0' : '-300px' }, 'fast')
        this.setState({
            breadCrumb: this.state.breadCrumb === 'Skills' ? 'Details' : 'Skills'
        })
    }
    handlePrev=()=>{
        this.setState({
            breadCrumb: 'Details'
        })
        $('#ellipse2 .slider .slides').animate({ 'left': '0' }, 'fast')
    }
    sentenceAnimation=()=>{
        //  $('.sentence').css('opacity',0)
        let template = $('.sentence').text().split('').map((value, index, array) => {
            let color = '#fff'
            let fontWeight = '100'
            if (array.length - 9 <= index) {
                color = '#ff4145'
                fontWeight = '600'
            }
            if (array.length - 1 === index) {
                color = "#fff"
                fontWeight = '100'
            }
            // else color='#fff'
            return value === " " ? ' ' : `<span style='color:${color};font-weight:${fontWeight}' key=${index}>${value}</span>`
        })
        $('.sentence').html(template)
        $(".sentence span").each(function (index) {
            $(this).css({
                'animation-delay': 50 * (1 + index) + 'ms',
                
            });
        });
    }

    
    render() {
      
         return (
            <div id="contact" className="contact-page">
                <div className="contact-box">
                     <div className='cls-6 middle-line'></div>
                     <div id="ellipse1" style={{borderRadius:'50%'}}></div>
                     <div id="ellipse2" style={{borderRadius: '50%' }}>
                         <img className="profile-picture" style={{width:'100%',objectFit:'cover',height:'100%',borderRadius:'10%'}} alt="personal infos" src="./images/profile.jpg"></img>
                         <h3><span>Rikesh</span> <span style={{ color:'#373737'}}>Shrestha</span></h3>                         
                            <div className="slider">
                                <div className="slides">
                                    <div className="contact-info" style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
                                        <div className="contact-details-section">
                                            <img src="./svg/map-pin.svg" alt='/'></img>
                                            <h3><span> Maharajgunj, KTM, Nepal</span></h3>
                                        </div>
                                        <div className="contact-details-section">
                                            <img src="./svg/phone.svg" alt='/'></img>
                                            <h3><span>+977-9861752607</span></h3>
                                        </div>
                                        <div className="contact-details-section">
                                            <img src="./svg/mail.svg" alt='/'></img>
                                            <h3><span>sr1k3sh@gmail.com</span></h3>
                                        </div>
                                    </div>
                                    <div className="personal-skills">
                                        <div className="contact-details-section">
                                            <img style={{width:'24px'}} src="./svg/internet.svg" alt='/'></img>
                                            <h3><span> Web Development</span></h3>
                                        </div>
                                        <div className="contact-details-section">
                                         <img style={{ width: '24px' }} src="./svg/android.svg" alt='/'></img>
                                            <h3><span>Android Development</span></h3>
                                        </div>
                                        <div className="contact-details-section">
                                         <img style={{ width: '24px' }} src="./svg/smartphone.svg" alt='/'></img>
                                            <h3><span>Hybrid Mobile App</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-details-section-social">
                                <svg version="1.1" id="linkedin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 382 382">
                                        <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                                            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                                            H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                                            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                                            s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                                            c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                                            c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                                            c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                                            L341.91,330.654L341.91,330.654z"/>

                                </svg>
                                <svg version="1.1" id="facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 408.788 408.788">
                                <path  d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
                                    h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
                                    v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
                                    l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
                                    c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
                                    C408.786,24.662,384.124,0,353.701,0z"/>
                            </svg>
                                <svg version="1.1" id="instagram"  x="0px" y="0px"
	                                viewBox="0 0 551.034 551.034" >
                                    
                                        <path  d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
                                            c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
                                            C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
                                            c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
                                            c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
                                        
                                            
                                        <path  d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517
                                            S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
                                            s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"/>
                                        
                                            
                                        <circle  cx="418.31" cy="134.07" r="34.15"/>
                                    
                                </svg>
                                <svg id="github" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />  
                                 </svg>
                            </div>
                         <div className="next">
                                
                                <svg version="1.1" id="c_prev" x="0px" y="0px" viewBox="0 0 240.823 240.823" >
                                    <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
                                    l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
                                    C187.881,124.315,187.881,116.495,183.189,111.816z"/>
	                            </svg>
                                <p>{this.state.breadCrumb}</p>
                                <svg version="1.1" id="c_next" x="0px" y="0px" viewBox="0 0 240.823 240.823" >
                                    <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
                                    l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
                                    C187.881,124.315,187.881,116.495,183.189,111.816z"/>
	                            </svg>
                            </div>
                     </div>
                        <h1 class="sentence title">
                            What more you want to know about me?
                        </h1>                       
                        <button className="know-more" style={{opacity:0}}>know <span style={{ color:'#ff4145'}}>More</span></button>
                    </div>                
            </div>
        )
    }
}
