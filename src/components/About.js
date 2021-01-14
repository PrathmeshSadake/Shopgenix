import React from 'react';
import styled from 'styled-components';

import techStack from '../img/stack.svg';
import { GrLinkedin, GrTwitter } from "react-icons/gr";


function About(){
    return(
        <StyledAbout>
                <StyledTextBox>
                    <h2>A bit about me</h2>
                    <p>I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products. I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.</p>
                    <h2>Why me ?</h2>
                    <p>My short term goal is I want a such a platform where I can grow my career along with the organization's growth and My Long term goal is I want to be one of the reason for the success of the organization and I want to see my organization as a bench mark to other organizations.</p>
<StyledSocial>
                <GrLinkedin color="#544FDF" size="30"/>
                <GrTwitter color="#544FDF" size="30"/>
            </StyledSocial>
                </StyledTextBox>
                <img className="techstack" src={techStack} alt="Technology stack" height="500px" />
        </StyledAbout>
    );
}

const StyledAbout = styled.div`
    height: 100vh;
    background: #F7FAFF;
    padding: 0rem 10rem;
    display:flex;
    justify-content:space-between;
    align-items:center;

`;

const StyledSocial = styled.div`
    display: flex;
    svg{
        margin-right: 2rem;
            &::last-child{
                margin-right: 0rem;
            }
    }
`;

const StyledTextBox = styled.div`
    width: 60%;
    padding-right: 10rem;
    h4{
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    h2{
        font-size: 2.75rem;
    }
`;



export default About;