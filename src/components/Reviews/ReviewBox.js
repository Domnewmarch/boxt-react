import React, { Component } from 'react';
import Stars from '../../assets/logos/stars-5-1.svg'

export default class ReviewBox extends Component {
    render(){
        return(

            <div className="h-40 w-52 bg-gray-100 inline-block shadow-sm p-3 relative rounded-sm mt-10 mb-2 mr-6">

                <div className="flex">
                    <img className="w-24 mr-2 m-0" src={Stars} alt="" />
                    <span className="text-xs text-gray-500 text-left m-0"> {this.props.time}</span>
                </div>

                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-bold mt-2 mb-2">{this.props.title}</h3>
                <p className=" text-xs break-words max-h-14 overflow-hidden mb-1">{this.props.review}</p>
                <span className="text-xs text-gray-500 font-light"> {this.props.name}</span>

            </div>
        )
    }
}