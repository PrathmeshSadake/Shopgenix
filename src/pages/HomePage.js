import React from 'react';

// Importing Components
import Header from '../components/Header';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

const HomePage = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Header/>
      <ScrollTop/>

        </motion.div>
    );
}

export default HomePage;