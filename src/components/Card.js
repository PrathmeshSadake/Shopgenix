import React from 'react';
import styled from 'styled-components';

import {motion} from 'framer-motion';


export default function Card({ service }){
    return(
        <StyledCard data-aos={"flip-left"}>
            <img src={service.imageUrl} alt="crd-img" height="150px"/>
            <h3>{service.title}</h3>
            <p>
            {service.description}
            </p>
        </StyledCard>
    );
}

const StyledCard = styled(motion.div)`
    min-height: 425px;
    max-width: 350px;
    overflow-x: hidden;
    padding: 40px 20px;
    background: white;
    color: #000;
    border: 1px solid #4A65F2;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px  whitesmoke;
    text-align: center;
    h3{
        margin: 1rem 0;
        font-size: 1.5rem;
        letter-spacing:1px;
        text-transform: capitalize;
    }
    @media (max-width: 1370px){
    margin-bottom: 1.5rem;    
    padding: 30px 15px;

    }
`;