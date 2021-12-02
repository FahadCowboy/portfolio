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
         px-4
         mx-auto 
         lg:px-14 
         py-5
         flex
         md:flex-row
         relative
         items-center
         fixed
         
      "
      style={{height:"100vh", zIndex:"-123"}}>
         <div className="flex flex-col hidden md:flex items-center justify-between absolute left-0 follow-wrap" style={{}}>
            <ul className="follow-dash">
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faGithub} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faTwitter} /></Link></li>
               <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            </ul>
            <p className="text-lg font-extrabold rotate-minus follow-p rounded badge-bg py-1.5 px-4">FOLLOW ME</p>
         </div>
         <div className="w-full sm:pl-0 md:pl-28 text-center md:text-left">
            <p className="t-hello theme-color text-xl mb-2">Hello! I am</p>
            <h1 className="display-name font-bold text-4xl sm:text-7xl font-extrabold mb-7">Mizanur Rahman</h1>
            <h5 className="t-designation theme-color text-2xl font-bold font-extrabold">Jr. MERN Stack Developer</h5>
            <ul className="mb-6 banner-ul">
               <li className="banner-li after-bullet relative inline-block text-xl">Web Developer</li>
               <li className="banner-li after-bullet relative inline-block text-xl pl-9">Programmer</li>
               <li className="banner-li banner-li-last inline-block text-xl pl-9">Football Freak</li>
            </ul>
            <div className="flex justify-center md:justify-start">
               <a href={resume} download><button class="banner-btn py-4 px-6 theme-bg text-base rounded-md">Get Resume</button></a>
               <a href="#about" class="banner-btn py-4 px-6 text-base rounded-md theme-outline ml-4">About Me</a>
            </div>
            <div className="w-full flex flex-col" style={{}}>
               <div className="flex md:hidden justify-center items-center pb-11 pt-11">
                  <div className="follow-small-screen-dash mx-auto inline-block relative">
                     <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">FOLLOW ME</p>
                  </div>
               </div>
               <ul className="flex md:hidden gap-4 justify-center">
                  <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faGithub} /></Link></li>
                  <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                  <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li className="mb-3"><Link className="text-xl" to="#" target="_black d-block"><FontAwesomeIcon icon={faInstagram} /></Link></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Banner;