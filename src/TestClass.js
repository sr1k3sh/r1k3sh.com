import React, { Component } from 'react'
import {init} from './services/Firebase'
import $ from 'jquery'
import './testclass.css'
import Firebase from 'firebase'
export default class TestClass extends Component {
    constructor(){
        super();
        init()
        this.state={
            // firebase:init(),
            data:[],
            patient: []
        }
    }
    writeUserData=()=>{
        Firebase.database().ref('/').set(this.state);
        console.log('data-saved')
    }
    getUserData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
        console.log('DATA RETRIEVED');
    }
    componentDidMount(){
        this.getUserData(); 
    }
    componentDidUpdate(prevState){
        if(prevState!==this.state){
            this.writeUserData();
        }
    }
    
    edit=(data)=>{
        this.refs.uid.value=data.uid;
        this.refs.name.value = data.name;
        this.refs.message.value = data.message;

    }
    delete=(val)=>{
            const {data}=this.state
            const newData = data.filter(item=>{
                return item.uid!==val.uid;
            })
        this.setState({
            data:newData
        })
    }
    renderDetails=()=>{
       return (
            <div className="fetched-div">
               <h1>Data Fetched</h1>
               <table>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>message</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>

                {    
                    this.state.data.map((item,index)=>{
                            return <tr>
                                    <td>{item.uid}</td>
                                    <td>{item.name}</td>
                                    <td>{item.message}</td>
                                    <td><button className="edit" onClick={()=>this.edit(item)}>edit</button></td>
                                    <td><button className="delete" onClick={() => this.delete(item)}>delete</button></td>

                                </tr>
                            
                    })
                  
                }
               </table>
            </div>
           );
    }
    renderInputs=()=>{
        return(
            <div className="input-div">
                <h1>Input value</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-div-details">
                        <input type='hidden' ref='uid' />
                        <label>Name</label>
                        <input type="text" ref="name"></input>
                    </div>
                    <div className="input-div-details">                    
                        <label>message</label>
                        <input type="text" ref="message" style={{height:'150px'}}></input>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        );
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let uid = this.refs.uid.value
        let name = this.refs.name.value;
        let message = this.refs.message.value;
        if(uid && name && message){
            const {data} = this.state;
            const dataIndex = data.findIndex(val=>val.uid===uid);
            data[dataIndex].name=name;
            data[dataIndex].message=message;
            this.setState({data});
        }
        else if (name && message) {
            const uid = new Date().getTime().toString();
            const { data } = this.state;
            data.push({ uid, name, message })
            this.setState({ data });
        }
        this.refs.name.value = '';
        this.refs.message.value = '';
        this.refs.uid.value = '';
    }
    render() {
      
        return (
           <div style={{display:'flex',flexDirection:'column',width:'800px',height:"400px"}}>
               {this.renderDetails()}
               {this.renderInputs()}
           </div>
        )
    }
}
