import React, { Component } from 'react'

import HowImg from '../../assets/images/how-img.png'
import Button from '../Button/Button'
import Button2 from '../Button/Button2'


export default class How extends Component {
    render(){
        return(

            <div className="text-center max-w-screen-xl m-auto border-b mt-10 flex flex-col">

                <div>
                    <h2 className="text-gray-800 text-5xl font-bold mt-20">How <span className="uppercase">boxt</span> works</h2>   

                    <p className="text-2xl mt-5 text-gray-500 font-light">
                    Simply answer a few questions about your home, choose a package that’s tailored for you and an install date. Our professional engineers will fit your boiler hassle and mess free.
                    </p>
                </div>

                <div className ="mt-10 m-auto ">
                    <img src={HowImg} alt="" />
                    <Button2 btn="Learn more" />
                </div>

                

                



            </div>   
            

        )
    }
}