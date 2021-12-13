import React from 'react';
import './LoveToDo.css'
import coding from './../../coding.png'
import travelling from './../../travelling.png'
import trekking from './../../trekking.png'
import footballPlayer from './../../football-player.png'

const LoveToDo = () => {
   return (
      <div className="
         container 
         px-4
         lg:px-14
         py-2
         mx-auto 
         py-24
      ">
         <div className="flex justify-center pb-16">
            <div className="love-to-do-dash mx-auto inline-block relative">
               <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">LOVE TO DO</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="badge-bg px-7 py-10 rounded-lg">
               <div className="w-full">
                  <img src={coding} className="w-2/5 mx-auto" alt=""></img>
               </div>
               <h2 className="text-2xl font-extrabold pt-3 text-center">Programming</h2>
            </div>
            <div className="badge-bg px-7 py-10 rounded-lg">
               <div className="w-full">
                  <img src={trekking} className="w-2/5 mx-auto" alt=""></img>
               </div>
               <h2 className="text-2xl font-extrabold pt-3 text-center">Hill Trekking</h2>
            </div>
            <div className="badge-bg px-7 py-10 rounded-lg">
               <div className="w-full">
                  <img src={travelling} className="w-2/5 mx-auto" alt=""></img>
               </div>
               <h2 className="text-2xl font-extrabold pt-3 text-center">Travelling</h2>
            </div>
            <div className="badge-bg px-7 py-10 rounded-lg">
               <div className="w-full">
                  <img src={footballPlayer} className="w-2/5 mx-auto" alt=""></img>
               </div>
               <h2 className="text-2xl font-extrabold pt-3 text-center">Playing Soccer</h2>
            </div>
         </div>
      </div>
   );
};

export default LoveToDo;