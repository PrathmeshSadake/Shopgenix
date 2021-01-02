import React from 'react'

import {StyledDiv, StyledLine} from '../styles';


import styled from 'styled-components';
import SkillTag from './SkillTag';

import { AiFillGithub } from "react-icons/ai";


export default function ProjectComponent({project}) {
    
    return (
                    <StyledProjectSection>
                    <StyledLine className="mobile-line"/>
                    <StyledImgContainer>
                        <img src={project.imageUrl} alt="" width='90%'/>
                    </StyledImgContainer>
                    <StyledProject>
                    <h2>{project.title}</h2>
                    <h3 className="subtitle">{project.subtitle}</h3>
                    <StyledLine className="desktop-line"/>
                        <p style={{color:'whitesmoke'}}>{project.description}</p>
                        <StyledProjectsTools>
                            {project.technologies.map((tech)=><SkillTag skill={tech}/>)}
                        </StyledProjectsTools>
                            <button> <a href={project.githubUrl}>
                             <AiFillGithub size="30px"/>
                            </a></button>
                    </StyledProject>
                    </StyledProjectSection>
    );
}



const StyledProjectSection = styled(StyledDiv)`
.mobile-line{
    display: none;
}
@media (max-width: 1200px){
        display: block;
        padding: 0rem;
        width: 100%;
        text-align: center;
        .desktop-line{
    margin: 5rem 0;
            display: none;
        }
        .mobile-line{
    margin: 5rem 0;
    display: block;
}
    }
`;

const StyledImgContainer = styled.div`
flex: 1.25;
`;

const StyledProject = styled.div`
flex: 1;
padding: 0 2rem;
.subtitle{
    margin: 1rem 0;
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    font-weight:300;
    font-size: 1.5rem;
}
button a svg{
    margin: 0;
}
h2{
    margin-top: 2rem
}

`;
const StyledProjectsTools = styled.div`
    margin: 20px 0;
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
    justify-content: center;
        width: 100%;
    }
`;