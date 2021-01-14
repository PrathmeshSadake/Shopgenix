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
            "description": 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications',
            "imageUrl": process.env.PUBLIC_URL + 'images/react.svg',
        },
        {
            "title": 'Flutter Development',
            "description": 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications',
            "imageUrl": process.env.PUBLIC_URL + 'images/flutter.svg',
        },
        {
            "title": 'UI / UX Design',
            "description": 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications',
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
            {skills.map((skill)=><Skill skill={skill}/>)}
        </SkillsSection>
        <StyledCardsSection>
            {ServicesData.map((data)=><Card service={data}/>)}
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

`;
const SkillsSection = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 50%;
    flex-wrap: wrap;
`;
const TextSection = styled.div`
    width: 60%;
`;
const StyledCardsSection = styled.div`
    display:flex;
    margin-top: 5rem;
    justify-content: space-evenly;
    align-items: center;
`;




export default Services;