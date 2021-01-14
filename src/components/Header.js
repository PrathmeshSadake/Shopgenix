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
`;

const StyledImageBox = styled.div`
    flex: 1;
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
`;




export default Header;