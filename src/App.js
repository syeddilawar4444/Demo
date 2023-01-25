import React from 'react';
// import Router  from './config/Router';

// import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import About from './Components/About';
import Skill from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackToTopBtn from './Components/BackToTopBtn';

const App = () => {
  return <div>
    {/* <Router /> */}

          <Header />
          <Hero />
          <Brands />
          <About />
          {/* <Skill />
          <Portfolio />
          <Services />
          <Contact /> */}
          <Footer />
          <BackToTopBtn />
        
  </div>;
};

export default App;
