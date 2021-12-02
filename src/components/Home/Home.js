import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Banner from '../Header/Banner/Banner';
import Navigation from '../Header/Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
   return (
      <div className="w-full">
         <Navigation></Navigation>
         <Banner></Banner>
         <About></About>
         <Projects></Projects>
         <Contact></Contact>
         <Blogs></Blogs>
      </div>
   );
};

export default Home;