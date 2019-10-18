import React, { Component } from 'react'
import './aboutme.css';
import hoverEffect from 'hover-effect'
import $ from 'jquery'
import Skills from './Components/Skills'
let imageUrl1, imageUrl2
let url="./images/alphabets"
let letters = {
    'first': [`${url}/r.png`, `${url}/i.png`, `${url}/k.png`, `${url}/e.png`, `${url}/s.png`, `${url}/h.png`],
    'second': [`${url}/s.png`, `${url}/h.png`, `${url}/r.png`, `${url}/e.png`, `${url}/s.png`, `${url}/t.png`, `${url}/h.png`, `${url}/a.png`]
}
export default class Aboutme extends Component {
    constructor(props) {
        super(props);
        this.props = props
        // console.log(props)
        this.state={
            isLoaded:false,
            intro:'My TimeLine',
           value:[],
           timeLine:'HELLO',
            next:'Do you want to know about my Skills'
        }
      
    }
    componentWillMount(){
       
        imageUrl1 = "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
        imageUrl2 = "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80"
       
        let that = this

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'https://api.darksky.net/forecast/8adaa664d67a4ecfcc5aff8a99260f16/37.8267,-122.4233',
            success: function (data) {
                    that.setState({
                        isLoaded:true,
                        value: data
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
    time=()=>{
        
            // console.log(this.state.value)
           
            if(!this.state.isLoaded)
            return <h1>loading</h1>
            else
            return <h1>{this.state.value.latitude}</h1>
    }
    boxComponent=()=>{

        setTimeout(_=>{
            $('.tiny-1 .t1').css({ 'animation': 'aboutloading 0.4s linear 0.2s forwards' })  
            $('.tiny-1 .t2').css({ 'animation': 'aboutloading 0.4s linear 0.4s forwards' })            
            $('.small-container').css({'animation':'aboutloading 0.4s linear 0.6s forwards'})
            $('.small-container .small-1').css({ 'animation': 'aboutloading 0.4s linear forwards','animation-delay':'0.8s' })
            $('.small-container .small-2').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay': '1s' })
            $('.small-container .small-3').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay': '1.2s' })
            $('.small-container .small-4').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay':  '1.4s' })
            $('.medium-container2').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay': '1.6s' })
            $('.medium-container1').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay': '1.8s' })
            $('.big-container').css({ 'animation': 'aboutloading 0.4s linear forwards', 'animation-delay': '2s' })
        },3000)
        
    }
    componentDidMount(){
        this.boxComponent()
        $('.intro').css('animation','unloading 2s linear reverse forwards')         
        setTimeout(_=>{
            new hoverEffect({
                parent: document.querySelector('.about .big-container'),
                intensity1: 0.1,
                intensity2: 0.1,
                angle2: Math.PI / 2,
                image1: imageUrl1,
                image2: imageUrl2,
                displacementImage: 'https://raw.githubusercontent.com/DomyS/Liquid-Image-Transition/master/heightMap.png'
            })

        },1000)     
        let that = this;
        this.aboutHoverEffect();
        $('.next').click(_=>{
            $('.about-container1').slideUp()
            setTimeout(_=>{
                 $('.about .skill-container').fadeIn()
                $('.about .skill-container').css({'display':'grid'})
                $('.about .skill-container .skill-left').css({'animation':'nextloading 2s ease-in forwards'})
                that.setState({
                    intro:'My Skills',
                    next:'contact me'
                })
            },800)
        })

    }
    aboutHoverEffect(){
        let date = {
            '1992':'Dude!! I was born that year',
            '2005':`I don't know myan,Probably being Schooling`,
            '2009':'Well I finished my Schooling that Year',
            '2011':'I went to High School',
            '2012':'I went to Bangalore and Joined Computer Engineering',
            '2016':'yeahhhh.. Er Rikesh Shrestha',
            '2017':'Worked as Software Engineer',
            '2019':'Working as a Front-end Developer'
            
        }
        $('.year').hover(_ => {
           console.log()
            // setTimeout((x)=>{
            //     // $('#timeline-text-' + _.target.dataset.year).css({display:'flex'})
            //     // $('#timeline-text-'+_.target.dataset.year).fadeIn()
            // },200)
            
                this.setState({
                    timeLine: date[_.target.dataset.year]  
                })

            
            $('#timeline-text').css({ 'animation': 'loading 0.8s linear forwards'});
            $('.container-details').css({ 'background': '#f0f8ff40', 'backdrop-filter': 'blur(20px)' })
        }, _ => {
            $('#timeline-text').css({ 'animation': 'unloading 0.8s linear forwards' });
            $('.container-details').css({ 'background': 'transparent', 'backdrop-filter': 'blur(2px)' })
        })  
    }
    hoverEffect(){
        var container = document.getElementById('about-con')
        var inner1 = document.getElementById('test1')
        var inner2 = document.getElementById('test2')



        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);
        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function (event) {
            console.log('mouse enter')
            update(event);
        };

        var onMouseLeaveHandler = function () {
            inner1.style = "";
            inner2.style = "";

        };

        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //-----------------------------------------

        var update = function (event) {

            mouse.updatePosition(event);
            updateTransformStyle(inner1,
                (mouse.y / inner1.offsetHeight / 2).toFixed(2),
                (mouse.x / inner1.offsetWidth / 2).toFixed(2)
            );
            // updateTransformStyle(inner2,
            //     (mouse.y / inner2.offsetHeight / 2).toFixed(2),
            //     (mouse.x / inner2.offsetWidth / 2).toFixed(2)
            // );
        };

        var updateTransformStyle = function (elem, x, y) {
            // console.log(inner)
            var style = "translateX(" + x * 20 + "%) translateY(" + y * 20 + "%)";
            elem.style.transform = style;
            elem.style.webkitTransform = style;
            elem.style.mozTransform = style;
            elem.style.msTransform = style;
            elem.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    }
    slidupText=(item)=>{    
        letters[item].forEach((item, index) => {
            $('#wrapper span').append(`<img id="l${index}" src="${item}"/>`)
        })
    }
    render() {
        return (
            <div className="about" id="about-con">
              
                <div className="intro">
                    <h1 style={{fontWeight:'100',fontSize:'20px'}}>{this.state.intro}</h1>
                </div>
                <div className="about-container1">
                    <div className="tiny-container">
                        <div className="tiny-1">
                            <div className="t1 year" data-year="1992">
                               <h3>1992</h3>
                           </div>
                            <div className="t2 year" data-year="2005">
                               <h3>2005</h3>
                           </div>
                        </div>
                    </div>
                    <div className="big-container">
                        <div className="container-details">
                         
                            <h1 id="timeline-text">{this.state.timeLine}</h1>

                        </div>
                    </div>
                    <div className="medium-container1">
                    </div>
                    <div className="medium-container2 year" data-year='2019'>
                        <h1>2019</h1>
                    </div>
                    <div className="small-container">
                        <div className="small-1 year" data-year="2009">
                            <h1>2009</h1>
                        </div>
                        <div className="small-2 year" data-year="2011">
                            <h2>2011</h2>
                        </div>
                        <div className="small-3 year" data-year="2012">
                            <h1>2012</h1>
                        </div>
                        <div className="small-4 year" data-year="2016">
                            <h2>2016</h2>
                        </div>
                    </div>
                </div>
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
                          <Skills></Skills>
                    </div>                   
                </div>
                <div className='next'>
                    <span>{this.state.next}</span>
                </div>
            </div>
        )
    }
}
