import { faGit, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faCaretSquareUp, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
   return (
   <div className="w-full badge-bg">
      <div className="container
      px-4 
      lg:px-14 
      py-5 
      mx-auto
      flex
      md:flex-row
      items-center
      ">
         <div className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
               <div className="flex justify-center md:justify-start gap-3">
                  <div className="language-scale language-scale-bn py-3 px-4 rounded dark-bg">
                     <p className="">ধন্যবাদ</p>
                  </div>
                  <div className="language-scale language-scale-en py-3 px-4 rounded dark-bg">
                     <p className="">THANKS</p>
                  </div>
                  <div className="language-scale language-scale-hn py-3 px-4 rounded dark-bg">
                     <p className="">धन्यवाद</p>
                  </div>
               </div>
               <div className="flex justify-center md:justify-end items-center pt-10 md:p-0">
                  <a href="https://github.com/FahadCowboy/portfolio" target="_blank" className="font-light mr-2" rel="noopener noreferrer"><span className="text-sm"><FontAwesomeIcon icon={faStar}/></span> STAR</a>
                  <a href="https://github.com/FahadCowboy/portfolio" target="_blank" className="font-light mr-2" rel="noopener noreferrer"><span className="text-sm"><FontAwesomeIcon icon={faCodeBranch}/></span> FORK</a>
                  <h4 className="mr-2 font-extrabold text-lg">BY ME</h4>
                  <a href="#header" className="theme-bg px-2 py-1 rounded dark-color-dim"><FontAwesomeIcon icon={faCaretSquareUp} /></a>
               </div>
            </div>
            <div>
               <p className="text-base text-center mt-5">A single page <span className="font-bold">React</span> application which is designed and developed by its owner <span className="font-bold">MIZANUR RAHMAN</span>.</p>
               <p className="text-xs font-light text-center mt-5">Inspired by Zonayed Ahmed</p>
            </div>
         </div>
      </div>
   </div>
      
   );
};

export default Footer;