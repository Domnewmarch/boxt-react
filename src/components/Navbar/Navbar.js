import React from 'react'
import Logo from '../../assets/images/boxt-logo.png'
import { FaPhoneAlt } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
          <header className="flex justify-center h-32 bg-white items-center m-auto max-w-7xl">
              
              <div className="">
                <img src={Logo} alt="boxt logo" />
              </div>
              

              <nav className="pl-36 pr-36">
                  <ul className="flex">
                      <li className="p-5 text-gray-500 text-lg">Products</li>
                      <li className="p-5 text-gray-500 text-lg">About BOXT</li>
                      <li className="p-5 text-gray-500 text-lg">Installation</li>
                      <li className="p-5 text-gray-500 text-lg">FAQs</li>
                      <li className="p-5 text-gray-500 text-lg">Finance</li>
                  </ul>
              </nav>

              <div className="text-right pr-5 "><span>Call An Engineer, free</span> <br /> <span className="text-red-600">0800 193 777</span> </div>

              <div> 
                <FaPhoneAlt className="text-red-500 text-3xl" />
              </div>
          </header>


        
        </>
      
    )
}

export default Navbar
