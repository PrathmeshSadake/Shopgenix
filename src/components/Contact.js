import React from 'react';
// import styled from 'styled-components';

import { StyledDiv } from '../styles';

// import instagram from '../img/instagram.svg';
// import linkedin from '../img/linkedin.svg';
// import twitter from '../img/twitter.svg';
// import github from '../img/github.svg';

import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import contact from '../img/contact.svg';

const Contact =()=>{
    return(
        //TODO : style={{backgroundColor:'#fff'}}
        <StyledDiv >
            <div>
                <h2>Let's Connect</h2>
                <div><AiFillInstagram size="40"/> Follow me on instagram</div>
                <div><AiFillTwitterCircle size="40"/> Follow me on instagram</div>
                <div><AiFillGithub size="40"/> Follow me on instagram</div>
                <div><AiFillLinkedin size="40"/> Follow me on instagram</div>
                <div><SiGmail size="40"/> Follow me on instagram</div>
            </div>
            <div>
                <img src={contact} alt="" height="800"/>
            </div>
        </StyledDiv>
    );
}




export default Contact;