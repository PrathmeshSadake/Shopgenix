import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../styles';
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
            <StyledAboutme>
                <h3>About me</h3>
                <p>Hi I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products. I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr></hr>

                <StyledSkillsSection>
                    {skills.map((skill)=><SkillTag skill={skill}/>)}
                </StyledSkillsSection>
                <div>
                <button><Link to='/projects'>
                        see my work <AiOutlineArrowRight size="20px" className="btn-icon"/>
                    </Link></button>
                    <button> <Link to='/contact'>
                        <AiOutlineMail size="20px" className="btn-icon"/> get in touch
                    </Link></button>
                </div>
            </StyledAboutme>
        </StyledAboutSection>
    );
}

const StyledAboutSection = styled(StyledDiv)`
    height: 90vh
`;

const StyledImgContainer = styled.div`
    flex: 1;
    /* padding-right: 5rem; */
`;
const StyledAboutme = styled.div`
    flex: 1.25;
    button{
        margin-right:3rem;
        
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
`;

export default About;