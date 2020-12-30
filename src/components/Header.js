import React from 'react';
import styled from 'styled-components';
// import GlobalStyle from './GlobalStyle';
import { StyledDiv } from '../styles';

import headerImg from '../img/header.svg';


const Header = () => {
    return(
        <StyledDiv>
            <TextBoxDiv>
                    <h2 className="heading-text">
                        myself <span>Prathmesh Sadake</span>, I'm a multi-disciplinary and a design-minded frontend web and mobile app developer.
                    </h2>
            </TextBoxDiv>
            <StyledImgDiv>
            <img src={headerImg} height="650px" alt="Boy illustration"/>
            </StyledImgDiv>
        </StyledDiv>
    );
}

const TextBoxDiv = styled.div`
    margin-right:20rem;
    flex: 2.25;
`;
const StyledImgDiv = styled.div`
    flex: 1;
`;



export default Header;