import React from 'react';
import styled from 'styled-components';

import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function SocialComponent() {

    return (
        <StyledSocialDiv >
            <StyledSocialSpan>
            <a href="https://www.linkedin.com/in/prathmeshsadake" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillLinkedin size='40'/></a>
            <a href="mailto:prathmeshsadake@gmail.com" target="_blank" rel="noreferrer noopener" className="social-icon" ><SiGmail size="40"/></a>
            <a href="https://www.github.com/prathmeshsadake" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillGithub size="40"/></a>
            <a href="https://www.instagram.com/prxthmesh" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillInstagram size="40"/></a>
            <a href="https://www.twitter.com/prathmeshsadake" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillTwitterCircle size="40"/></a>
        </StyledSocialSpan>
        </StyledSocialDiv>
    );
}

const StyledSocialDiv = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`;


const StyledSocialSpan = styled.div`
    .social-icon{
        margin-right: 2rem;
        color: #4A65F2;
        transition: color 0.75s ease;
        &:hover{
            color:#45a293;
        }
    }
`;