import React from 'react';
import styled from 'styled-components';
import { StyledDiv, StyledLine } from '../styles';
import { Link } from 'react-router-dom';

import SkillTag from './SkillTag';

import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";

import me from '../img/me.jpg';

const About = () => {
    const skills = ['flutter', 'dart', 'html', 'css / sass', 'javascript', 'bootstrap', 'react . js', 'c / c++', 'figma'];
    return(
        <StyledAboutSection>
            <StyledImgContainer>
                <img src={me} alt="about me" width="80%" />
            </StyledImgContainer>
            <StyledLine className="divider"/>
            <StyledAboutme>
                <h3>About me</h3>
                <p>Hi I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products. I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.</p>
                <p>My short term goal is I want a such a platform where I can grow my career along with the organization's growth and My Long term goal is I want to be one of the reason for the success of the organization and I want to see my organization as a bench mark to other organizations.</p>
                <StyledLine/>
                <StyledSkillsSection>
                    {skills.map((skill)=><SkillTag skill={skill}/>)}
                </StyledSkillsSection>
                <div>
                <button><Link to='/projects'>
                       See my work <AiOutlineArrowRight size="20px" className="btn-icon"/>
                    </Link></button>
                    <button> <Link to='/contact'>
                    <AiOutlineMail size="20px" className="btn-icon"/> Get in touch
                    </Link></button>
                </div>
            </StyledAboutme>
        </StyledAboutSection>
    );
}

const StyledAboutSection = styled(StyledDiv)`
        padding-top: 10vh ;


    .divider{
        display:none;
    }
    @media (max-width: 1200px){
margin-top: 1.5rem;

        display: block;
    padding: 2rem 2.5rem;
        width: 100%;
        text-align: center;
        .divider{
        display: block;
    }

    }
`;

const StyledImgContainer = styled.div`
    flex: 1;
    img{
        width: 90%;
    }
    @media (max-width: 1200px){
        img{
            margin-top: 10rem;
        }

    }
`;
const StyledAboutme = styled.div`
    flex: 1.25;
    button{
        margin: 1.5rem;
    }
    .btn-icon{
        color: yellow;
        padding-top: 5px;
    }
    
`;
const StyledSkillsSection = styled.div`
    margin: 20px 0;
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
        justify-content:center;
        width: 100%;
    }
`;

export default About;