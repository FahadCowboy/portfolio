import React from 'react';
import './Blogs.css'

const Blogs = () => {
   return (
      <div className="
         container 
         md:px-7
         lg:px-11
         py-2
         mx-auto 
         py-24
      ">
         <div className="flex justify-center pb-16">
            <div className="blogs-dash mx-auto inline-block relative">
               <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">MY BLOGS</p>
            </div>
         </div>
      </div>
   );
};

export default Blogs;