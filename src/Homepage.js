import React, { Component } from 'react'
import FirstPage  from './Components/FirstPage';

export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.props=props
       
    }
    
    componentWillReceiveProps(props){
        const that = this
        setTimeout(function(){
            // that.props=props;

            // that.setState({
            //     showFirstPage:props.loaderIsHidden
            // })
        },100)
    }
    render() {
        console.log(this.props)
        return (
            <div className='home' style={{background:'#000',height:'100%'}}>
                {this.props.loaderIsHidden? <FirstPage></FirstPage>:''}
            </div>
        )
    }
}
