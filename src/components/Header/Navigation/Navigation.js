import React from 'react';
import logo from './../../../MRF-Logo.jpg'
import { Link } from 'react-router-dom';
import resume from './../../../MizanurRahmanResume.pdf'

const Navigation = () => {
   return (
      <div>
         <div className="
            container 
            md:px-7
            lg:px-11
            py-2
            mx-auto 
            flex 
            flex-col 
            lg:flex-row
            justify-between
            items-center
         ">
            <div className="w-16">
               <img className="w-full" src={logo} alt="" />
            </div>
            <div className="my-auto">
               <ul className="flex text-base ">
                  <li className=" "><a href="#about" className="px-4 py-2" to="#">ABOUT</a></li>
                  <li className=" "><a href="#projects" className="px-4 py-2" to="#">PROJECTS</a></li>
                  <li className=" "><a href="#contact" className="px-4 py-2" to="#">CONTACT</a></li>
                  <li className="ml-4"><a href={resume} download className="px-4 py-2 rounded-md" style={{border: "2px solid #00cf5d"}} to="#">RESUME</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navigation;