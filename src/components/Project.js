import React from 'react'

import styled from 'styled-components';

export default function ProjectComponent({project}) {    
    return (
                    <StyledProjectSection >
                    <StyledImgContainer>
                        <img  src={project.imageUrl} alt="" width='90%'/>
                    </StyledImgContainer>
                    <StyledProject>
                    <h2>{project.title}</h2>
                    <h3 className="subtitle">{project.subtitle}</h3>
                        <p style={{color:'whitesmoke'}}>{project.description}</p>
                        <StyledProjectsTools>
                            {project.technologies.map((tech)=><h2>{tech}</h2>)}
                        </StyledProjectsTools>
                    </StyledProject>
                    </StyledProjectSection>
    );
}



const StyledProjectSection = styled.div`
    min-height: 70vh;
    padding: 0rem 5rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
@media (max-width: 1200px){
        display: block;
        padding: 0rem;
        width: 100%;
        text-align: center;
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