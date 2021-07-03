import React, { Component } from 'react'

export default class Button extends Component {
    render(){
        return(
            <button className="bg-white p-5 mt-5 shadow-lg hover:bg-gray-300">{this.props.btn}</button>
        )
    }
}

