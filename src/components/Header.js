import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../styles';

import { Wave } from './Wave';

import headerImg from '../img/header.jpg';
import { Link } from 'react-router-dom';


import {motion} from 'framer-motion';
import { titleAnimation, fade } from '../animation';

const Header = () => {
    return(
        <StyledDiv variants={fade}>
                    <Wave/>
            <TextBoxDiv variants={titleAnimation}>
                    <motion.h2 variants={titleAnimation} className="heading-text">
                        Hello,<br className="break"></br> I'm <span className="name">Prathmesh Sadake,</span> I'm a multi-disciplinary and a design-minded frontend web and mobile app developer.
                    </motion.h2>
                    <motion.button variants={fade}>
                        <Link className="btn-primary" to='/about'>
                        <motion.h3>&#x1F449;</motion.h3>
                    </Link></motion.button>
                    
            </TextBoxDiv>
            <StyledImgDiv>
            <motion.img variants={fade} src={headerImg} height="650px" alt="Boy illustration"/>
            </StyledImgDiv>
        </StyledDiv>
    );
}

const TextBoxDiv = styled(motion.div)`
    margin-right: 5rem;
    flex: 2.5;
    .heading-text{
        letter-spacing: 1.25px;
        line-height:110%;
        word-wrap:break-word;
        margin-bottom: 2.5rem;
    }
    @media (max-width: 1200px){
    margin: 0rem;
    padding: 0 1.5rem 5rem 1.5rem;
    text-align: center;
    .heading-text{
        line-height:110%;
        word-wrap: word-break;
        font-size: 2.5rem;
    }
    .break{
        display: none;
    }
    }
    @media (max-width: 700px){
        .name{
            display:block;
        font-size: 2.5rem;
        }
    }
`;
const StyledImgDiv = styled.div`
    flex: 1;
    @media (max-width: 1200px){
        text-align: center;
        justify-content: center;
    
    img{
        margin: 3rem 1.5rem;
        width: 90%;
    }
    }
`;



export default Header;
