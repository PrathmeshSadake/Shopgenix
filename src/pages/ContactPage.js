import React from 'react';
import Contact from '../components/Contact';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

export default function ContactPage(){
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Contact/>
        <ScrollTop/>
        </motion.div>
    );
}