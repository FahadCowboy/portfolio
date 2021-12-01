import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import resume from './../../../MizanurRahmanResume.pdf'
import './Banner.css';



const Banner = () => {



   return (
      <div className="
         container
         md:px-7
         mx-auto 
         lg:px-4 
         py-5
         flex
         md:flex-row
         relative
         items-center
      "
      style={{height:"100%"}}>
         <div className="flex flex-col sm:hidden md:flex items-center justify-between absolute left-0 follow-wrap" style={{}}>
            <ul className="follow-dash">
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faGithub} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faTwitter} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            </ul>
            <p className="text-lg font-extrabold rotate-minus follow-p rounded badge-bg py-1.5 px-4">FOLLOW ME</p>
         </div>
         <div className="w-full sm:pl-0 md:pl-28">
            <p className="theme-color text-xl mb-2">Hello! I am</p>
            <h1 className="font-bold text-7xl font-extrabold mb-7">Mizanur Rahman</h1>
            <h5 className="theme-color text-2xl font-bold font-extrabold">Jr. MERN Stack Web Developer</h5>
            <ul className="mb-6">
               <li className="after-bullet relative inline-block text-xl">Web Developer</li>
               <li className="after-bullet relative inline-block text-xl pl-9">Programmer</li>
               <li className="inline-block text-xl pl-9">Football Freak</li>
            </ul>
            <div className="">
               <a href={resume} download><button class="py-4 px-6 theme-bg text-base rounded-md">Get Resume</button></a>
               <a href="#about" class="py-4 px-6 text-base rounded-md theme-outline ml-4">About Me</a>
            </div>
         </div>
      </div>
   );
};

export default Banner;