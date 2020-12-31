import React from 'react';
import styled from 'styled-components';
// import { StyledDiv } from '../styles';

import SocialComponent from './SocialComponent';
import { Wave2 } from './Wave';
// import contact from '../img/contact.svg';

const Contact =()=>{
    return(
        <StyledContact>
            <ContactSection >
                <h2>Get in Touch</h2>
                <h4>If you have any questions please feel free to drop me a line. I will get back to you as soon as I can. That's a promise</h4>
                <StyledLine></StyledLine>
                <SocialComponent/>
        <h4>Designed, Developed & Maintained by Prathmesh Sadake</h4>
        <h4>Made with <span style={{color:'red'}}>&hearts;</span> - 2020</h4>

            </ContactSection>
            {/* <div>
                <img src={contact} alt="" height="800"/>
            </div> */}
            <Wave2/>
</StyledContact>
    );
}

// const StyledContact = styled(StyledDiv)`
//     min-height: 92vh;
//     background-color: white;
// `;
const StyledContact = styled.div`
    min-height: 92vh;
    background-color: white;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const StyledLine = styled.div`
    height: 2px;
    background-color: #66fcf1;
    width: 100%;
    margin: 2rem 0;
`;

const ContactSection = styled.div`
    color: #000;
    background-color:'#c5c6c7';
    width:60%;
    /* margin: 0 auto; */
    text-align:center;
`;


export default Contact;