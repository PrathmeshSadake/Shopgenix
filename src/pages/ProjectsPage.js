import React from 'react';
import styled from  'styled-components';

// Importing Components
import ProjectComponent from '../components/ProjectComponent';

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, fade } from '../animation';

import ScrollTop from '../components/ScrollTop';

const ProjectsPage = () => {
    const projects = [{
        "title" : 'Unsplashy',
        "subtitle" : 'Free stock images React Application',
        "description" : 'An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/unsplashy.png',
        "technologies" : ['React', 'react-bootstrap', 'css', 'unsplash-api'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake/unsplashy',
      },
      // {
      //   "title" : 'Newscast',
      //   "subtitle" : 'Flutter News application',
      //   "description" : 'About A News app made with flutter SDK which fetches news from news API. It has some awesome features like category wise news, tab bar, splash screen, article view and browser view.',
      //   "imageUrl" : process.env.PUBLIC_URL + '/projects/newscast.png',
      //   "technologies" : ['React', 'react-bootstrap', 'css', 'newsapi.png'],
      //   "githubUrl" : 'https://www.github.com/PrathmeshSadake/newscast',
      // },
      {
        "title" : 'Omnifood',
        "subtitle" : 'Responsive Restaurant website',
        "description" : 'Responsive restaurant website for Omnifood. Omnifood is a premium food delivery service with the mission to bring affordable and healthy meals to as many people as possilbe.',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/omnifood.png',
        "technologies" : ['Html', 'css', 'javascript'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake/omnifood',
      },
      {
        "title" : 'Devfolio',
        "subtitle" : 'Personal Portfolio made with React . js',
        "description" : 'Personal portfolio to display the samples of my work, details about myself, completed projects in the past and better explain to employers why they must hire me.',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/devfolio.png',
        "technologies" : ['React', 'javascript', 'html', 'css', 'framer-motion'],
        "githubUrl" : 'https://www.github.com/PrathmeshSadake/devfolio',
      }
    ];
    return(
        <StyledProjectPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <motion.h1 variants={titleAnimation} className="title">projects</motion.h1>
        {projects.map((project)=> 
        <ProjectComponent variants={fade} project={project} />)}
      <ScrollTop/>
        </StyledProjectPage>
    );
}

const StyledProjectPage = styled(motion.div)`
        padding-top: 10vh ;

    h1{
text-align: center;
        font-size: 5rem;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
        letter-spacing: 4px;
        color: #66fcf1;
    }
`;

export default ProjectsPage;