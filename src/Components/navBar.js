import React, { Component } from 'react'
import './navBar.css';
import {
     Link
} from "react-router-dom";
import $ from 'jquery'

export default class NavBar extends Component {
    componentDidMount(){
        $('#navBar').fadeOut();
        $('.closeMenu').fadeOut();
        const links = [
            document.querySelector('#home'),
            document.querySelector('#contact'),
            document.querySelector('#about'),
            document.querySelector('#test')
        ];

        let activeIndex;

        function toggleActive(index) {
            links[activeIndex].classList.remove('active');
            links[index].classList.add('active');
            activeIndex = index;

        };

        links.forEach((link, index) => {
            if (link.classList.contains('active')) {
                activeIndex = index;
            }

            link.addEventListener('mouseover', () => toggleActive(index));
            link.addEventListener('click',function(){
                $('#navBar').slideUp();
                $('#hamburgerMenu').fadeIn();
                $('.closeMenu').fadeOut();
            })

        });
                $('#hamburgerMenu').click(function(){
                    $('#navBar').slideDown();
                    $('.closeMenu').fadeIn();
                
                });
          
        $('.closeMenu').click(function () {
            $('#navBar').slideUp();
            $(this).fadeOut();
         
        });
    }
    

    componentWillReceiveProps(props){
     this.props=props;

    }
    render() {
        let currentPath = window.location.pathname;
         currentPath = currentPath.replace(/\//g, '')
        console.log(currentPath)
        
        return (
            <div style = {
                {   
                    width:'100%',
                    position: 'absolute',
                    zIndex: '3'
                }
            }>
                
                <nav id="navBar"> 
                    <Link to='/' 
                        id="home" className="active">
                        {/* <div> Home </div>h2 */}
                        <h2>Home</h2>
                    </Link>
                    <Link to='/about' id = "about" >
                        <h2>About me</h2>
                    </Link> 
                    <Link to='/contact' id="contact">
                        <h2>Contact Me</h2>
                    </Link> 
                    <Link to='/test' id="test">
                        <h2>Test</h2>
                    </Link>
                </nav>
                <div id="hamburgerMenu">
                    <h2>menu</h2>
                </div>
                <div className="closeMenu">
                    <h2>*</h2>
                </div>
            </div>
               
            
        )
    }
}
