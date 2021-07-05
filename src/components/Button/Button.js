import React from 'react'

const Button = (props) => {
   

        return(
            <button className="bg-white p-5 mt-5 shadow-lg hover:bg-gray-300">{props.btn}</button>
        )
    
}

export default Button
