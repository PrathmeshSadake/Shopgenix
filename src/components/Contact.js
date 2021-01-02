import React from 'react';
import styled from 'styled-components';
import { StyledLine } from '../styles';

import SocialComponent from './SocialComponent';
import { Wave2 } from './Wave';
// import contact from '../img/contact.svg';

import {motion} from 'framer-motion';
import { titleAnimation, lineAnimation } from '../animation';

const Contact =()=>{
    return(
        <StyledContact>
            <ContactSection >
                <motion.h2 variants={titleAnimation} className="heading-contact">Get in Touch</motion.h2>
                <motion.h4 variants={titleAnimation} className="description-contact">If you have any questions please feel free to drop me a line. I will get back to you as soon as I can. That's a promise</motion.h4>
                <StyledLine variants={lineAnimation}/>
                <SocialComponent/>
        <motion.h4 variants={titleAnimation} className="credits-contact">Designed, Developed & Maintained by Prathmesh Sadake</motion.h4>
        <motion.h4 variants={titleAnimation} className="footer-contact">Made with <span style={{color:'red'}}>&hearts;</span>  2021</motion.h4>
            </ContactSection>
            <Wave2/>
</StyledContact>
    );
}

const StyledContact = styled.div`
        padding-top: 10vh ;
    min-height: 92vh;
    background-color: #1f2833;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ContactSection = styled.div`
    color: #000;
    background-color:'#c5c6c7';
    width:60%;
    text-align:center;

    .heading-contact{
        margin-bottom: 1.5rem;
        font-weight: 700;
        color: #66fcf1
    }
    .description-contact{
        color: white;
        font-weight: 500;
    }
    .credits-contact,
    .footer-contact{
        color: white;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        letter-spacing: 1px
    }
    .credits-contact{
        font-size: 1.5rem;
        margin-bottom: 1rem
    }
    .footer-contact{
        font-size:1rem;
    }
    @media (max-width: 1200px){
        width:90%;
    }
`;


export default Contact;