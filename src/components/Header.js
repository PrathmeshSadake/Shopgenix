import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headerImg from '../img/header.svg';
import { StyledDiv } from '../styles';
import Wave from './Wave';
import Nav from './Nav';

function Header(){
    return(
        <StyledHeader>
            <Nav/>
            <StyledDiv>
                <StyledImageBox>
                <img src={headerImg} alt="boy with laptop" width="80%"/>
                </StyledImageBox>
                <StyledTextBox>
                    <h4>Hi, my name is Prathmesh.</h4>
                    <h2>I'm a multi-disciplinary and a design-minded frontend web and mobile app developer with specializing in flutter app development and ReactJS.</h2>
                    <div className="btn-div">
                        <Link className="btn btn-filled" to="/contact">LET'S CHAT</Link>
                    </div>
                </StyledTextBox>
            <Wave/>
            </StyledDiv>
        </StyledHeader>
    );
}

export const StyledHeader = styled.div`
    min-height: 100vh;
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
        transition: all .5s ease-in;
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
        padding: 9px 25px;
        border: 1px solid #5250DF;
    }
    @media (max-width: 1370px)
    {
        padding: 0rem 3rem;
        
        .btn-div{
        width: 100%;
        margin: 2rem 0rem;
        display: block;
    }}
    @media(max-width: 992px){
        padding: 0rem 2rem;
        text-align: center;
        .btn-div{
        width: 100%;
        margin: 1.5rem 0rem;
        display: block;
    }
    }
    @media (max-width: 480px){
        padding: 0rem 1.5rem;
        .btn-div{
        width: 100%;
        margin: 1.5rem 0rem;
        display: block;
    }
    }
    
`;

const StyledImageBox = styled.div`
    flex: 1;
    @media (max-width: 992px)
    {
    text-align: center;
    margin-top: 2rem;
        img{
            width: 60%;
        }
    }
`;

const StyledTextBox = styled.div`
    width: 100%;
    padding-left: 4rem;
    z-index: 5;
    flex: 1.5;
    h4{
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    h2{
    font-size: 2.75rem;
    letter-spacing: 1px;
    }
    @media (max-width: 1370px)
    {
        padding-left: 0rem;
    width: 100%;
    h2{
    font-size: 2.5rem;
    letter-spacing: 1px;
    }
        
    /* padding: 2rem; */

        /* text-align: center; */
        
    }
    @media (max-width: 480px){
        padding-left: 0rem;
    width: 100%;

        h4{
        margin: 1.2rem 0;
        font-size: 1.2rem;
    }
    h2{
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-weight: 500;
    }
    }
`;




export default Header;