import React, { Component } from 'react'

export default class PartnersLogo extends Component {
    render(){
        return(
            
            <div>
                <img className="opacity-50" src={this.props.img} alt="" />
            </div>
            

        )
    }
}