import React from 'react';
import portrait from './../../For-DP-Converted-to-1-Megabyte.jpg'
import './About.css'
import resume from './../../MizanurRahmanResume.pdf'

const About = () => {
   return (
      <div id="about" className="
         container 
         px-4
         lg:px-14
         py-2
         mx-auto 
         py-16

         text-center md:text-left
      " 
         style={{}}
      >
         
         <div className="flex justify-center pb-16">
            <div className="about-dash mx-auto inline-block relative">
               <h2 className="text-lg font-extrabold about-h2 rounded badge-bg py-1.5 px-4 z-1">ABOUT ME</h2>
            </div>
         </div>


         
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-24"> 
               <div className="order-2 md:order-1">
                  <div className="text-base">
                     <p className="leading-7">Hello! I'm Mizanur Rahman, a passionate programmer and Web developer. I'm a junior full-stack web developer based on JavaScript, Node JS, React, and Express. My core skill is based on JavaScript, and I love to do most of the things using JavaScript. I learned Basic UI Design using HTML and CSS years ago, but in the meantime, I realized that it was nothing but a drop of water in the ocean. I had a huge appetite to conquer the Web but didn't have a proper guideline. Then I started pushing myself to make a big jump into the JavaScript universe. After blindly running into a long, dark tunnel of frustration for weeks, months, and even years, I realised that this is the natural behaviour of the programming universe. I made my own path and ran by myself until I shifted into React. Luckily, I found "Programming Hero" and was taught React for the Front End and Express for the Back End by my idol of this journey, Jhanker Mahbub. Now I feel I'm skilled enough to get hired as a Junior Web Developer by any international or local organization.I am available for any kind of job opportunity that suits my interests.</p>
                  </div>
                  
                  <div className="pt-8">
                     <a href={resume} download class=" about-btn py-4 px-6 theme-bg text-base rounded-md">Get Resume</a>
                     <a href="#contact" class=" about-btn py-4 px-6 text-base rounded-md theme-outline ml-4">Contact Me</a>
                  </div>
               </div>
               <div className="flex justify-center align-center order-1 md:order-2 my-auto">
                  <div className="w-80 p-4 rounded-lg portrait mb-5 md:mb-0">
                     <img className=" rounded-lg portrait-grayscale" src={portrait} alt="" />
                  </div>
               </div>
            </div>
      </div>
   );
};

export default About;