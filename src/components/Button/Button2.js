import React, { Component } from 'react'


export default class Button2 extends Component {
    render(){
        return(
            <button className="bg-white p-3 mt-5 shadow-lg hover:bg-green-600 border border-green-700 w-60" >{this.props.btn}</button>
        )
    }
}