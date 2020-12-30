import React from 'react';
import styled from 'styled-components';
// import GlobalStyle from './GlobalStyle';
import { StyledDiv } from '../styles';

import Wave from './Wave';

import headerImg from '../img/header.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <StyledDiv>
            <TextBoxDiv>
                    <h2 className="heading-text">
                        Myself <span>Prathmesh Sadake</span>, I'm a multi-disciplinary and a design-minded frontend web and mobile app developer.
                    </h2>
                    <button>
                        <Link className="btn-primary" to='/about'>
                        About me &#x1F449;
                    </Link></button>
            </TextBoxDiv>
            <StyledImgDiv>
            <img src={headerImg} height="650px" alt="Boy illustration"/>
            </StyledImgDiv>
            <Wave/>
        </StyledDiv>
    );
}

const TextBoxDiv = styled.div`
    margin-right:20rem;
    flex: 2.25;
    .heading-text{
        letter-spacing: 1.5px;
        line-height:125%;
        word-wrap:break-word;
        margin-bottom: 4rem;
    }
`;
const StyledImgDiv = styled.div`
    flex: 1;
`;



export default Header;