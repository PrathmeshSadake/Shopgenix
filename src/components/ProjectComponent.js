import React from 'react'

import {StyledDiv, StyledLine} from '../styles';

import {  Link } from 'react-router-dom';

import styled from 'styled-components';
import SkillTag from './SkillTag';

export default function ProjectComponent() {
    const projects = [{
        "title" : 'Unsplashy',
        "description" : 'An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls',
        "imageUrl" : '../img/me.jpg',
        "technologies" : ['React', 'react-bootstrap', 'css', 'newsapi.org'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake',
      },
      {
        "title" : 'Unsplashy',
        "description" : 'An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls',
        "imageUrl" : '../img/me.jpg',
        "technologies" : ['React', 'react-bootstrap', 'css', 'newsapi.org'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake',
      },
      {
        "title" : 'Unsplashy',
        "description" : 'An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls',
        "imageUrl" : '../img/me.jpg',
        "technologies" : ['React', 'react-bootstrap', 'css', 'newsapi.org'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake',
      }
    ];
    return (
        <>
            {projects.map((project)=>{ 
                return (
                    <StyledAboutSection>
                    <StyledImgContainer>
                        <img src='https://images.unsplash.com/photo-1602524207251-8ad5d2b2c303?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt="about me" width="75%" />
                    </StyledImgContainer>
                    <StyledAboutme>
                    <h2>{project.title}</h2>
                    <StyledLine/>
                        <p style={{color:'whitesmoke'}}>{project.description}</p>
                        <StyledSkillsSection>
                            {project.technologies.map((tech)=><SkillTag skill={tech}/>)}
                        </StyledSkillsSection>
                            <button> <a href={project.githubUrl}>
                             view on github
                            </a></button>
                    </StyledAboutme>
                    </StyledAboutSection>
                )
            })}
        </>
    )
}



const StyledAboutSection = styled(StyledDiv)`
height: 90vh
`;

const StyledImgContainer = styled.div`
flex: 1.25;
/* padding-right: 5rem; */
`;
const StyledAboutme = styled.div`
flex: 1;
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