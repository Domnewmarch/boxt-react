import React from 'react'
import ReviewBox from './ReviewBox'


import Trustlogo from '../../assets/logos/trustpilot-1.svg'

const Review = () => {
    
        return(
            
            <div className="max-w-screen-xl m-auto items-centerflex flex-col mb-20" id="review">

                <div>
                    <h2 className="text-gray-800 text-5xl font-bold text-center mt-10">Our customers rate us No.1</h2>
                </div>

                <div className="flex justify-center flex-wrap">

                    <ReviewBox 
                        time="3 hours ago"
                        title="Boiler ordered and fitted in a week "
                        review="Boiler ordered and fitted in a week. The fitter Jamie Hardaker was very professional"
                        name="Malcolm Clegg"
                    />

                    <ReviewBox 
                        time="10 hours ago"
                        title="Boiler ordered and fitted in a week "
                        review="Boiler ordered and fitted in a week. The fitter Jamie Hardaker was very professional"
                        name="Malcolm Clegg"
                    />

                    <ReviewBox 
                        time="12 hours ago"
                        title="Boiler ordered and fitted in a week "
                        review="Boiler ordered and fitted in a week. The fitter Jamie Hardaker was very professional"
                        name="Malcolm Clegg"
                    />

                    <ReviewBox 
                        time="2 days ago"
                        title="Boiler ordered and fitted in a week "
                        review="Boiler ordered and fitted in a week. The fitter Jamie Hardaker was very professional"
                        name="Malcolm Clegg"
                    />

                    <ReviewBox 
                        time="2 days ago"
                        title="Boiler ordered and fitted in a week "
                        review="Boiler ordered and fitted in a week. The fitter Jamie Hardaker was very professional"
                        name="Malcolm Clegg"
                    />


                </div>

                <p className="text-sm text-center mt-1">Rated <span className="font-bold">5.0</span> / 5 on <span className="font-bold underline">8,164 reviews.</span> Showing our 4 & 5 star reviews.</p>

                <img className="w-20 m-auto mt-2" src={Trustlogo} alt="" />

            </div>

        )
    
}

export default Review