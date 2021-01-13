import React from 'react';
import styled from 'styled-components';

import logo from '../img/logo.svg';
import headerImg from '../img/header.svg';
import { StyledDiv } from '../styles';

function Header(){
    return(
        <StyledHeader>
            <StyledNav>
                <h1><img src={logo} alt='logo' height="25px"/> Prathmesh Sadake</h1>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </StyledNav>
            <StyledDiv>
                <img src={headerImg} alt="boy with laptop" height="800px" />
                <StyledTextBox>
                    <h4>Hi, my name is Prathmesh.</h4>
                    <h2>I'm a multi-disciplinary and a design-minded frontend web and mobile app developer with specializing in flutter app development and React.js .</h2>
                    <div className="btn-div">
                        <a className="btn btn-filled" href="w">LET'S CHAT</a>
                        <a className="btn btn-stroke" href="w">ABOUT</a>
                    </div>
                </StyledTextBox>
            </StyledDiv>
        </StyledHeader>
    );
}

export const StyledHeader = styled.div`
    height: 100vh;
    padding: 0rem 10rem;

    .btn-div{
        margin-top: 2.5rem;
        width: 40%;
        display: flex;
        justify-content: space-between;
        a{
            text-decoration: none;
        }
    }
    .btn{
        padding: 10px 25px;
        letter-spacing: 1px;
        font-weight: 500;
        transition: all .75s ease-in;
        box-shadow: #000 2px 5px;
    }
    .btn-filled:link,
    .btn-filled:visited{
        color: #fff;
        background: linear-gradient(to right, #5750EB, #4A65F2);
    }
    .btn-filled:hover,
    .btn-filled:active{
        color: #5250DF;
        background: transparent;
        transform: translateY(1px);
        border: 2px solid #5250DF;
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

const StyledTextBox = styled.div`
    width: 90%;
    padding-left: 10rem;
    h4{
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    h2{
        font-size: 2.75rem;
    }
`;

const StyledNav = styled.nav`
    height:10vh;
    display:flex;
    margin: auto ;
    justify-content: space-between;
    align-items: center;
    padding:0.25rem 0rem;

    ul{
        list-style: none;
        display: flex;
        li{
            padding-left: 10rem;
        }
    }
`;


export default Header;