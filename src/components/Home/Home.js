import React from 'react';
import About from '../About/About';
import LoveToDo from '../Blogs/LoveToDo';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import GitHubContributions from '../GitHubContributions/GitHubContributions';
import Banner from '../Header/Banner/Banner';
import Navigation from '../Header/Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
   return (
      <div className="w-full">
         <Navigation></Navigation>
         <Banner></Banner>
         <About></About>
         <LoveToDo></LoveToDo>
         <Projects></Projects>
         <Contact></Contact>
         <Footer></Footer>
      </div>
   );
};

export default Home;