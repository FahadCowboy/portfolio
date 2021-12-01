import React from 'react';
import portrait from './../../For-DP-Converted-to-1-Megabyte.jpg'
import './About.css'
import resume from './../../MizanurRahmanResume.pdf'
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <div id="about" className="
         container 
         md:px-7
         lg:px-11
         py-2
         mx-auto 
         py-24
      " 
         style={{}}
      >
         
         <div className="flex justify-center pb-16">
            <div className="about-dash mx-auto inline-block relative">
               <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">ABOUT ME</p>
            </div>
         </div>


         
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-16 lg:gap-24"> 
               <div className="sm:order-2 md:order-1 lg:order-1">
                  <div className="text-lg">
                     <p className="leading-9">Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>
                  </div>
                  
                  <div className="pt-8">
                     <a href={resume} download class="py-4 px-6 theme-bg text-base rounded-md">Get Resume</a>
                     <a href="#contact" class="py-4 px-6 text-base rounded-md theme-outline ml-4">Contact Me</a>
                  </div>
               </div>
               <div className="flex justify-center align-center sm:order-1 md:order-2 my-auto">
                  <div className="w-80 p-4 rounded-lg">
                     <img className="rounded-lg" src={portrait} alt="" />
                  </div>
               </div>
            </div>
      </div>
   );
};

export default About;