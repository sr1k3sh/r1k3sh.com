import React, { Component } from 'react'
import './mood.css'
export default class MoodCheck extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            option1: 'happy',
            option2: 'neutral',
            option3: 'angry'
        };
    }

    handleClick(e) {
        this.setState({
            styles: e.target.value
        })
    }

    render() {
        return (

            <div style={{}}>
                <div className={`hier-der-smileeey ${this.state.styles}`}>
                    <div className="smiley">
                        <div className="eyes">
                            <div className="eye"></div>
                            <div className="eye"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>
                </div>

                <button className="jla-button-mood" onClick={this.handleClick} value={this.state.option1}>{this.state.option1}</button>
                <button className="jla-button-mood" onClick={this.handleClick} value={this.state.option2}>{this.state.option2}</button>
                <button className="jla-button-mood" onClick={this.handleClick} value={this.state.option3}>{this.state.option3}</button>

            </div>
        );
    }
}
