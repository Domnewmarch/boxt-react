import React from 'react'
import PartnersLogo from '../logos/partner.logo'


const edf = require('../../assets/logos/edf-logo.svg')
const worcester = require('../../assets/logos/worcester-logo.svg')
const bosch = require('../../assets/logos/bosch-logo.svg')
const google = require('../../assets/logos/Google-logo.svg')
const itv = require('../../assets/logos/itv-logo.svg')

const Partners = () => {
    
        return(

            <div className="items-center text-center m-auto border-b">

                <div>
                    <h2 className="text-3xl font-bold mt-6 text-gray-700">Our Partners</h2>
                </div>

                <div className="flex justify-between max-w-screen-xl m-auto mt-6 mb-8">

                    <PartnersLogo img={edf.default}/>
                    <PartnersLogo img={worcester.default}/>
                    <PartnersLogo img={bosch.default}/>
                    <PartnersLogo img={google.default}/>
                    <PartnersLogo img={itv.default}/>

                </div>

            </div>   
            

        )
    
}

export default Partners