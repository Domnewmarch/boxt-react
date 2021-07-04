import React, { Component } from 'react';


export default class ReviewBox extends Component {
    render(){
        return(

            <div className="h-40 w-52 bg-gray-100 inline-block shadow-sm p-3 relative rounded-sm mt-10 mb-2 mr-6">
                
                <span className="text-xs text-gray-500 text-left m-auto"> {this.props.time}</span>
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-bold mt-2 mb-2">{this.props.title}</h3>
                <p className=" text-xs break-words max-h-14 overflow-hidden mb-1">{this.props.review}</p>
                <span className="text-xs text-gray-500 font-light"> {this.props.name}</span>

            </div>
        )
    }
}