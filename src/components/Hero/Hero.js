import React from 'react'
import Button from '../Button/Button'

import Itv from '../../assets/logos/itv.png'
import Boiler from '../../assets/images/hero-bg.png'
import Stars from '../../assets/logos/stars-5-1.svg'
import Trustlogo from '../../assets/logos/trustpilot-1.svg'



const How = () => {
    
        return (

                <div className="bg-gradient-to-t from-red-500 to-red-400 landing-hero--boiler overflow-hidden flex">

                    <div className ="flex m-auto relative">

                        

                        <div className="md:mt-20 md:ml-40 info-text flex-wrap p-5 md:p-0 max-w-screen-sm">
                            <h1 className="text-7xl text-white font-bold">Boiler Trouble?</h1>
                            <h2 className="text-3xl text-white mt-3">Get a new boiler at a fixed price with COVID safe installation tomorrow.</h2>
                            <p className="text-lg text-white mt-3">From the UK's <span className="font-bold">No.1 Heating Company</span></p>
    
                            <Button btn="Get your fixed price now" />
                            
                            <div className="flex mt-5 items-center">
                                <p className="text-white text-md font-bold capitalize italic mr-4">excellent</p>
                                <img className="w-28 mr-5" src={Stars} alt="" />
                                <p className="text-xs mt-1 mr-3 text-white hidden md:block"><span className="font-bold">5.0</span> / 5 on <span className="font-bold">8,164 reviews</span></p>
                                <img className="w-20" src={Trustlogo} alt="" />
                            </div>
                          

                            <img className="mt-8 " src={Itv} alt="" />
    
                        </div>

                        <div className="z-0 relative boiler-wrapper">
                            <img className="boiler-img md:block hidden" src={Boiler} alt="" />
                        </div>

                        
                    </div>
    
    
                </div>
        )

}

export default How

