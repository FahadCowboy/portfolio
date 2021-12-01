import React from 'react';
import Banner from './Banner/Banner';
import Navigation from './Navigation/Navigation';

const Header = () => {
   return (
      <div className="flex align-center flex-col" style={{height:"100vh"}}>
         <Navigation></Navigation>
         <Banner></Banner>
      </div>
   );
};

export default Header;