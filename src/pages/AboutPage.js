import React from 'react';
import About from '../components/About';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slider, sliderContainer,pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

const AboutPage = () => {
    return(
    
    <motion.div variants={pageAnimation} transition={{staggerChildren: 1}} initial="hidden" animate="show" exit="exit" style={{overflow: 'hidden'}}>
            {/* <FrameContainer variants={sliderContainer}>
            <Frame1 variants={slider}/>
            <Frame2 variants={slider}/>
            <Frame3 variants={slider}/>
            <Frame4 variants={slider}/>
            </FrameContainer> */}
            <About/>
      <ScrollTop/>

        </motion.div>
    );
}


// Frame Animation
const FrameContainer = styled(motion.div)`
    position: absolute;;
    left:0;
    top: 0;
    height: 500vh;
    width: 100vw;
`;
const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top: 0;
    width:100%;
    height:500vh;
    background:#fffebf;
    z-index:2;
`;
const Frame2 = styled(Frame1)`
    background:#ffd224;
`;
const Frame3 = styled(Frame1)`
    background:#ff00ff;
`;const Frame4 = styled(Frame1)`
background:#44ffff;
`;


export default AboutPage;