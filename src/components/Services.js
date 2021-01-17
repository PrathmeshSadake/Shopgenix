import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Skill from './Skill';
import {Link} from 'react-router-dom';

function Services(){
    const skills = ["react. JS", " flutter", "dart", "html", "css / scss", "javascript", "node. JS", "express. JS", "figma"];
    const ServicesData = [
        {
            "title": 'web development',
            "description": 'Majority of my projects are Frontend related where I use React as a primary technology for developing Frontend Application. Apart from ReactJS I have also used Technologies like HTML, CSS/SCSS, Javascript, Bootstrap, NodeJS, ExpressJS and a bit of MongoDB.',
            "imageUrl": process.env.PUBLIC_URL + 'images/react.svg',
        },
        {
            "title": 'Flutter Development',
            "description": 'I also develop cross-platform Mobile Applications using Flutter framework. Mainly focusing on developing beautiful flutter UIs, working with APIs and State management using Provider package. I have created couple of flutter projects which are listed on Projects page.',
            "imageUrl": process.env.PUBLIC_URL + 'images/flutter.svg',
        },
        {
            "title": 'UI / UX Design',
            "description": 'Apart from developing beautiful Websites and Mobile apps, To improve my design thinking and also as a hobbie I design User Interfaces too. I use Figma as my major Designing tool to create beautiful User Interfaces for websites and mobile apps.',
            "imageUrl": process.env.PUBLIC_URL + 'images/figma.svg',
        } 
    ]
    return(
        <StyledServices>
        <TextSection>
        <h2>What I do</h2>
            <p>I'm a Frontend Web Developer & Computer Science Engineer who loves building webpages and Hybrid mobile apps. I design and code beautifully simple things, and I love what I do.</p>
        </TextSection>
        <SkillsSection>
            {skills.map((skill)=><Skill key={skill} skill={skill}/>)}
        </SkillsSection>
        <StyledCardsSection>
            {ServicesData.map((data)=><Card key={data.title} service={data}/>)}
        </StyledCardsSection>
        <div className="btn-div">
        <Link className="btn btn-stroke" to="/projects">Projects</Link>
        </div>
        </StyledServices>
    );
}

const StyledServices = styled.div`
    padding: 7rem 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    letter-spacing: 1px;
    line-height: 150%;

    h2{
        font-size: 3rem;
        margin-bottom: 2.5rem;
    }
    .btn-div{
        margin-top: 3rem;
        text-align: center;
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
    @media (max-width: 1370px){
        display: block;
    padding: 3rem 1.5rem;

    }
    @media (max-width: 480px){
    padding: 3rem 1.25rem;        
    }
`;
const SkillsSection = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 50%;
    flex-wrap: wrap;
    @media (max-width: 1370px){
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
`;
const TextSection = styled.div`
    width: 60%;
    @media (max-width: 1370px){
        text-align:center;
        width: 100%;
    }
`;
const StyledCardsSection = styled.div`
    display:flex;
    margin-top: 5rem;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1370px){
        flex-wrap: wrap;
    }
    @media (max-width: 480px){
        margin-top: 3rem;
    
    }

`;




export default Services;