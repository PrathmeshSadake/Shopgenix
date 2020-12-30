import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../styles';
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import contact from '../img/contact.svg';

const Contact =()=>{
    return(
        <StyledContact>
            <ContactSection >
                <h2>Let's Connect</h2>
                <div><AiFillInstagram size="40"/> Follow me on instagram</div>
                <div><AiFillTwitterCircle size="40"/> Follow me on instagram</div>
                <div><AiFillGithub size="40"/> Follow me on instagram</div>
                <div><AiFillLinkedin size="40"/> Follow me on instagram</div>
                <div><SiGmail size="40"/> Follow me on instagram</div>
            </ContactSection>
            <div>
                <img src={contact} alt="" height="800"/>
            </div>
</StyledContact>
    );
}

const StyledContact = styled(StyledDiv)`
    min-height: 92vh;
    background-color: white;
`;

const ContactSection = styled.div`
    color: #000;
    background-color:'#c5c6c7'
`;


export default Contact;