import React, { Component } from 'react'
import Button from '../Button/Button'

import Itv from '../../assets/logos/itv.png'
import Boiler from '../../assets/images/hero-bg.png'



export default class Hero extends Component {
    render(){
        return (

                <div className="bg-gradient-to-t from-red-500 to-red-400 landing-hero--boiler overflow-hidden flex">

                    <div className ="flex m-auto relative max-w-screen-2x">

                        

                        <div className="mt-20 ml-40 info-text">
                            <h1 className="text-7xl text-white font-bold">Boiler Trouble?</h1>
                            <h2 className="text-3xl text-white mt-3">Get a new boiler at a fixed price with COVID safe installation tomorrow.</h2>
                            <p className="text-lg text-white mt-3">From the UK's <span className="font-bold">No.1 Heating Company</span></p>
    
                            <Button btn="Get your fixed price now" />

                            <img className="mt-8" src={Itv} alt="" />
    
                        </div>

                        <div className="z-0 relative boiler-wrapper">
                            <img className="boiler-img" src={Boiler} alt="" />
                        </div>

                        
                    </div>
    
    
                </div>
        )

    }
}


