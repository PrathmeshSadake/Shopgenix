import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function SocialComponent({icon}) {

    return (
        <StyledSocialDiv>
            <StyledSocialSpan>
            <Link className="social-icon" ><AiFillLinkedin size='40'/></Link>
            <Link className="social-icon" ><SiGmail size="40"/></Link>
            <Link className="social-icon" ><AiFillGithub size="40"/></Link>
            <Link className="social-icon" ><AiFillInstagram size="40"/></Link>
            <Link className="social-icon" ><AiFillTwitterCircle size="40"/></Link>
        </StyledSocialSpan>
        </StyledSocialDiv>
    );
}

const StyledSocialDiv = styled.div`
display:flex;
color: #000;
text-align:center;
justify-content: space-around;
align-items:center;
margin: 1rem 0;
`;


const StyledSocialSpan = styled.div`
    /* a{
        text-decoration: none;
    } */
    .social-icon{
        margin: 0 1rem;
    }
`;
