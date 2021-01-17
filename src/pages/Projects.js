import React from 'react';
import styled from  'styled-components';

// Importing Components
import ProjectComponent from '../components/Project';
import Nav from '../components/Nav';


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
            <Nav/>
        <h1  className="title">Featured Projects</h1>
        {projects.map((project)=> 
        <ProjectComponent project={project} />)}
        </StyledProjectPage>
    );
}

const StyledProjectPage = styled.div`
    padding: 0rem 10rem;
    background: #F7FAFF;

    .title{
width: 50%;
        font-size: 3rem;
        margin-top: 3rem;
        border-bottom: 2px solid #0965f1;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
        letter-spacing: 3px;
        color: #4A65F2;
    }
    @media(max-width:480px){
    padding: 0rem 1rem;
text-align: center;
.title{
width: 100%;
        font-size: 1.5rem;
        margin-top: 2rem;
        letter-spacing: 1px;
    }

    }
`;

export default ProjectsPage;