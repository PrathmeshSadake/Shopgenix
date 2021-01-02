import React from 'react';
import Contact from '../components/Contact';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

const ContactPage = () => {
    return(
        <StyledContactPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Contact/>
      <ScrollTop/>

        </StyledContactPage>
    );
}

const StyledContactPage = styled(motion.div)`
height: 100vh;
    background-color: #1f2833`;

export default ContactPage;