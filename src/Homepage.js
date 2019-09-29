import React, { Component } from 'react'
import FirstPage  from './Components/FirstPage';
import './homepage.css';
import $ from 'jquery';

export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.props=props
       
    }
    componentDidMount(){
        $('#about-nav').click(_=>{
            $('.main-image').fadeOut('fast',_=>{
                $('.main-image').remove()
            })
            
        })
      
}    
    render() {
        console.log(this.props)
        return (
            <div className="homepage">
                
                <FirstPage/>
                
            </div>
        )
    }
}
