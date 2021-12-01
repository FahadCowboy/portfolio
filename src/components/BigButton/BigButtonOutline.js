import React from 'react';

const BigButtonOutline = ({bigButtonOutlineText}) => {
   return (
      <div>
         <button class="py-4 px-6 text-base rounded-md theme-outline ml-4">{bigButtonOutlineText}</button>
      </div>
   );
};

export default BigButtonOutline;