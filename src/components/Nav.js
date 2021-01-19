import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../img/logo.svg';
import {nameAnimation} from '../animation';
import {motion} from 'framer-motion';

export default function Nav() {
    return (
        <StyledNav variants={nameAnimation}>
                <Link to="/"><h1><img src={logo} alt='logo' height="25px"/> Prathmesh Sadake</h1></Link>
                <ul >
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </StyledNav>
    );
}


const StyledNav = styled(motion.nav)`
    height:10vh;
    display:flex;
    margin: auto ;
    justify-content: space-between;
    align-items: center;
    padding:0.25rem 0rem;
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
        display: flex;
        li{
            padding-left: 10rem;
            a{
                text-decoration: none;
                font-size: 1.25rem;
                letter-spacing: 1px;
                font-weight: 500;
                transition: all 1.5s ease-in;
                &:hover{
                    color: #4A65F2;
                    border-bottom: 1.5px solid #5750EB;
                }
            }
        }
    }
    @media (max-width: 480px){
        display: block;
        padding-top: 1rem;
        ul{
            margin-top: 15px;
            padding: 0 1rem;
            justify-content: space-between;
        li{
            padding-left: 0rem;
            }
        }
    }
    
`;