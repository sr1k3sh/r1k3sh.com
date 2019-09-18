import React, { Component } from 'react'
import './aboutme.css';
import hoverEffect from 'hover-effect'
import $ from 'jquery'
let imageUrl1, imageUrl2,l1;
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
           value:[]
        }
      
    }
    componentWillMount(){
       
        imageUrl1 = "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
        imageUrl2 = "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80"
        l1 = "./images/alphabets/r.png"
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
    componentDidMount(){
        this.slidupText('first')
      
        
       new hoverEffect({
           parent: document.querySelector('.about .about-container'),
           intensity1: 0.1,
           intensity2: 0.1,
           angle2: Math.PI / 2,
           image1: imageUrl1,
           image2: imageUrl2,
           displacementImage: 'https://raw.githubusercontent.com/DomyS/Liquid-Image-Transition/master/heightMap.png'
       })
        $('.about-container').bind('mousewheel', (e) => {

            if (e.originalEvent.wheelDelta / 120 > 0) {
                $('#wrapper span img').each((i, item) => $(item).fadeOut(_ => {
                    // $(item).remove()
                }))
                this.slidupText('first')
            }
            else {                
                $('#wrapper span img').each((i, item) => $(item).slideUp(_ => {
                    $(item).addClass('slideup')
                }))
                this.slidupText('second')
               
            }
        });
       
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
                <div className="about-container"  id="test2" >
                    <h1 id="test1"><span>RIKES</span><span>H</span></h1>
                    <div className="container-left">
                        <div className="desc">
                            <h2>Web and Mobile Developer</h2>
                        </div>
                    </div>
                    <div className="container-right">
                       
                            <h1>{this.time()}</h1>
                        {/* <div id="wrapper">
                            <span style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                              
                            </span>
                        </div> */}
                    </div>
               </div>
            </div>
        )
    }
}
