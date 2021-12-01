import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
   return (
      <div className="w-full">
         <header className="w-full" style={{height: "100vh"}}>
            <Header></Header>
         </header>
         <About></About>
         <Projects></Projects>
         <Contact></Contact>
         <Blogs></Blogs>
      </div>
   );
};

export default Home;