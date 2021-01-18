import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

function Footer(){
    return(
        <StyledFooter>
            <StyledFooterNav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </StyledFooterNav>
            <div>
        <h1><img src={logo} alt='logo' height="25px"/> Prathmesh Sadake</h1>
        <p>&copy; 2020 Prathmesh Sadake. All Rights Reserved.</p>
        </div>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #d6e5fc;
    padding: 0rem 10rem;
    @media(max-width: 1370px){
    padding: 0rem 5rem;
    }
    @media (max-width: 700px){
    min-height: 10vh;
        display: block;
        text-align:center;
    padding: 2rem 1rem;
        h1{
            margin-top: 1.5rem;
        }
    }
    @media (max-width: 1370px){
        h1{
            margin-top: 1.25rem;
            font-size: 1.5rem;
        }
    
    }
`;

const StyledFooterNav = styled.div`
    ul{
        list-style: none;
        display: flex;
        li{
            margin-right: 3rem;
            &::last-child{
                margin-right: 0rem;
            }
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
            }}
    @media (max-width: 480px){
        justify-content: space-between;
        li{
        margin-right: 0rem;
        }}
    }
`;


export default Footer;