import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

function HomePage(){
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Header/>
        <About/>
        <Services/>
      <ScrollTop/>
        </motion.div>
    );
}

export default HomePage;