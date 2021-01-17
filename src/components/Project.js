import React from 'react'

import styled from 'styled-components';
import Skill from './Skill';
export default function ProjectComponent({project}) {    
    return (
                    <StyledProjectSection >
                    <StyledImgContainer>
                        <img  src={project.imageUrl} alt="" width='90%'/>
                    </StyledImgContainer>
                    <StyledProject>
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                        <p>{project.description}</p>
                        <h3>Tools and technologies used:</h3>
                        <StyledProjectsTools>
                            {project.technologies.map((tech)=><Skill skill={tech} />)}
                        </StyledProjectsTools>
                        <div className="btn-div">
        <a className="btn btn-stroke" href="g">github</a>
        </div>
                    </StyledProject>
                    <hr/>
                    </StyledProjectSection>
    );
}



const StyledProjectSection = styled.div`
    min-height: 70vh;
    padding: 0rem 5rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    letter-spacing: 1px;
@media (max-width: 992px){
        display: block;
        padding: 0rem;
        width: 100%;
        text-align: center;
    }
@media (max-width: 480px){
    margin: 1.5rem 0rem;
}
`;

const StyledImgContainer = styled.div`
flex: 1.15;
`;

const StyledProject = styled.div`
flex: 1;
padding: 0 2rem;
h1{
    color: #0965f1;
}
h2{
    margin: 1.5rem 0;
}
h3{
    margin: .5rem 0;
}
p{
    line-height: 150%;
}
.btn-div{
        margin-top: 3rem;
        a{
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.25px;
        }
}
    .btn{
        padding: 12px 30px;
        letter-spacing: 1px;
        font-weight: 500;
        transition: all .75s ease-in;
        box-shadow: #000 2px 5px;
    }
    .btn-stroke:link,
    .btn-stroke:visited{
        color: #5250DF;
        border: 2px solid #5250DF;
    }
    .btn-stroke:hover,
    .btn-stroke:active{
        color: #fff;
        transform: translateY(1px);
        background: linear-gradient(to right, #5750EB, #4A65F2);
    }
@media (max-width: 480px){
    padding: 0;
    .btn-div{
    margin-bottom: 3rem;
    }
h2{
    margin: 1rem 0;
}
p{
    line-height: 125%;
}
    }
`;
const StyledProjectsTools = styled.div`
    width: 90%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
    justify-content: center;
        width: 100%;
    }
`;