import React from 'react';
import styled from 'styled-components';
import { StyledLine } from '../styles';

import SocialComponent from './SocialComponent';
import { Wave2 } from './Wave';
// import contact from '../img/contact.svg';

const Contact =()=>{
    return(
        <StyledContact>
            <ContactSection >
                <h2 className="heading-contact">Get in Touch</h2>
                <h4 className="description-contact">If you have any questions please feel free to drop me a line. I will get back to you as soon as I can. That's a promise</h4>
                <StyledLine/>
                <SocialComponent/>
        <h4 className="credits-contact">Designed, Developed & Maintained by Prathmesh Sadake</h4>
        <h4 className="footer-contact">Made with <span style={{color:'red'}}>&hearts;</span>  2021</h4>
            </ContactSection>
            <Wave2/>
</StyledContact>
    );
}

const StyledContact = styled.div`
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