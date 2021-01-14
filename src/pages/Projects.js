import React from 'react';
import styled from  'styled-components';
import { IoIosArrowBack } from "react-icons/io";
// Importing Components
import ProjectComponent from '../components/Project';


const ProjectsPage = () => {
    const projects = [{
        "title" : 'Unsplashy',
        "subtitle" : 'Free stock images React Application',
        "description" : 'An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/unsplashy.png',
        "technologies" : ['React', 'react-bootstrap', 'css', 'unsplash-api'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake/unsplashy',
        "backgroundColor" : "pink",
      },
      {
        "title" : 'Omnifood',
        "subtitle" : 'Responsive Restaurant website',
        "description" : 'Responsive restaurant website for Omnifood. Omnifood is a premium food delivery service with the mission to bring affordable and healthy meals to as many people as possilbe.',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/omnifood.png',
        "technologies" : ['Html', 'css', 'javascript'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake/omnifood',
        "backgroundColor" : "blue",
      },
    ];
    return(
        <StyledProjectPage >
            <IoIosArrowBack size="50" color="black" style={{marginLeft:"-8rem", marginBottom:"3rem"}}/>
        <h1  className="title">Featured Projects</h1>
        {projects.map((project)=> 
        <ProjectComponent project={project} />)}
        </StyledProjectPage>
    );
}

const StyledProjectPage = styled.div`
    padding: 2rem 10rem;
    background: #F7FAFF;

    h1{
/* text-align: center; */
        font-size: 3rem;
        
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
        letter-spacing: 4px;
        color: #66fcf1;
    }
`;

export default ProjectsPage;