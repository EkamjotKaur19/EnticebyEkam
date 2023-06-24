import Blog from 'components/Blog/Blog';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';
import Home from 'components/Home/Home';
import Milestones from 'components/Milestones/Milestones';
import Portfolio from 'components/Portfolio/Portfolio';
import Pricing from 'components/Pricing/Pricing';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Services from 'components/Services/Services';
import Skills from 'components/Skills/Skills';
import Testimonials from 'components/Reviews/Testimonials';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      {/* <Video /> */}
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App