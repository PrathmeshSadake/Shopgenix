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
            <StyledCredits>
        <h1><img src={logo} alt='logo' height="25px"/> Prathmesh Sadake</h1>
        <p>&copy; 2020 Prathmesh Sadake. All Rights Reserved.</p>
        </StyledCredits>
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
        }
        
    }
`;
const StyledCredits = styled.div`
    /* justify-content: center;
    align-items: center; */
`;


export default Footer;