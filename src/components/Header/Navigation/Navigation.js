import React, { useEffect, useState } from 'react';
import logo from './../../../MRF-Logo.png'
import { Link } from 'react-router-dom';
import resume from './../../../MizanurRahmanResume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Navigation = () => {
   const [toggle, setToggle] = useState(false)

   return (
      <div className="w-full sticky md:static top-0" style={{backgroundColor: toggle ? '#1d293a' : '#111a28'}}>
         <div className="
            container 
            px-7
            lg:px-14
            py-2
            mx-auto 
            flex 
            flex-col 
            md:flex-row
            justify-between
            items-center
            z-10
         "> 

            <div className="w-full flex justify-between items-center">
               <div className="w-16">
                  <img className="w-full" src={logo} alt="" />
               </div>
               <div className="w-9 h-9">
                  {
                     toggle?
                  <div onClick={() => setToggle(false)} className="w-9 h-9 flex justify-center items-center md:hidden text-xl w-4 h-4 rounded theme-bg" style={{color: "#1d293a"}}>
                     <FontAwesomeIcon icon={faTimesCircle}/>
                  </div>
                  :
                  <div onClick={() => setToggle(true)} className="w-9 h-9 flex  justify-center items-center md:hidden text-1xl p-3 rounded theme-bg" style={{color: "#1d293a"}}>
                  <FontAwesomeIcon icon={faBars}/>
                  </div>
                  }
               </div>
               
            </div>
            
            <div className={`z-10 top-20 nav-wrap my-auto w-full ${toggle ? 'flex' : 'hidden'} md:flex md:justify-end absolute md:static`}  style={{backgroundColor: toggle ? '#1d293a' : ''}}>
               <ul className="flex flex-col md:flex-row text-base p-10 md:p-0">
                  <li className="my-2 md:my-0"><a onClick={() => setToggle(false)} href="#about" className="px-4 py-2 inline-block" to="#">ABOUT</a></li>
                  <li className="my-2 md:my-0"><a onClick={() => setToggle(false)} href="#projects" className="px-4 py-2 inline-block" to="#">PROJECTS</a></li>
                  <li className="my-2 md:my-0"><a onClick={() => setToggle(false)} href="#contact" className="px-4 py-2 inline-block" to="#">CONTACT</a></li>
                  <li className="my-2 md:my-0 ml-4"><a onClick={() => setToggle(false)} href={resume} download className="px-4 py-2 mt-4 md:mt-0 rounded-md inline-block" style={{border: "2px solid #00cf5d"}} to="#">RESUME</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navigation;