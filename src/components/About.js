import React from 'react';
import styled from 'styled-components';

import { GrGithub, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";


function About(){
    return(
        <StyledAbout>
                <StyledTextBox>
                    <h2>A bit about me</h2>
                    <p>I'm Prathmesh, a Frontend Web Developer who loves building webpages and Software products.
                    I'm currently pursuing B.E in Computer Science from Vishwaniketan's Institute of Technology (Mumbai University).
                    I'm passionate about developing web pages and beautiful User-Interfaces. My hobbies include listening music and reading books.
                    I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.</p>
                    <h3>Why me ?</h3>
                    <p>My short term goal is I want such a platform where I can grow my career along with the organization's growth and My Long term goal is I want to be one of the reason for the success of the organization and I want to see my organization as a bench mark to other organizations.</p>
                    
                    <h4>How to reach me: <a href="mailto:prathmeshsadake@gmail.com">prathmeshsadake@gmail.com</a></h4>
<StyledSocial>
                <GrLinkedin color="#544FDF" size="30"/>
                <GrTwitter color="#544FDF" size="30"/>
                <GrGithub color="#544FDF" size="30"/>
                <GrInstagram color="#544FDF" size="30"/>
            </StyledSocial>
                </StyledTextBox>
        </StyledAbout>
    );
}

const StyledAbout = styled.div`
    min-height: 100vh;
    background: #F7FAFF;
    padding: 0rem 10rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 1370px){
    padding: 0rem 5rem;
    } 
    @media (max-width: 992px){
        display:block;
    padding: 4rem 3rem;
    text-align:center;
    }
    @media (max-width: 992px){
        display:block;
    padding: 4rem 1.5rem;
    text-align:center;
    }
`;

const StyledSocial = styled.div`
    display: flex;
    margin-top: 2rem;
    svg{
        margin-right: 2rem;
            &:last-child{
                margin-right: 0rem;
            }
    }
    @media (max-width: 1370px){
        display: block;
        text-align:center;
    }
`;

const StyledTextBox = styled.div`
    width: 60%;
    letter-spacing: 1px;
    line-height: 150%;
    h3{
        margin-bottom: 1.75rem;
        font-size: 2rem;
    }
    h2{
        font-size: 3rem;
        margin-bottom: 2.5rem;
    }
    p{
        margin-bottom: 1.5rem;
    }
    @media (max-width: 1370px){
    display:block;
    width: 100%;
    line-height: 125%;

    text-align:center;
    h3{
        margin-bottom: 1rem;
        font-size: 1.35rem;
    }
    h2{
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    p{
        margin-bottom: 1rem;
        font-size: 1rem;
    }
    }
`;



export default About;