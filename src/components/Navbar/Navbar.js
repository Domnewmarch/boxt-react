import React from 'react'
import Logo from '../../assets/images/boxt-logo.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <>
          <header className="flex flex-wrap md:justify-center h-32 bg-white items-center m-auto max-w-7xl">
              
              <div className="ml-2">
                <img className="" src={Logo} alt="boxt logo" />
              </div>
              

              <nav className="pl-36 pr-36 hidden md:block">
                  <ul className="flex">
                      <li className="p-5 text-gray-500 text-lg cursor-pointer"> <Link to="review" smooth={true} duration={1000}>Products</Link> </li>
                      <li className="p-5 text-gray-500 text-lg">About BOXT</li>
                      <li className="p-5 text-gray-500 text-lg">Installation</li>
                      <li className="p-5 text-gray-500 text-lg">FAQs</li>
                      <li className="p-5 text-gray-500 text-lg">Finance</li>
                  </ul>
              </nav>

              <div className="text-right pr-5 hidden md:block"><span>Call An Engineer, free</span> <br /> <span className="text-red-600">0800 193 777</span> </div>

              <div> 
                <FaPhoneAlt className="text-red-500 text-3xl hidden md:block" />
              </div>
          </header>


        
        </>
      
    )
}

export default Navbar
