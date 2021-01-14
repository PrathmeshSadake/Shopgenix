import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function Services(){
    return(
        <StyledServices>
        <div>
        <h2>What I do</h2>
            <p>I'm a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products.</p>
            <p>I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <StyledCardsSection>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </StyledCardsSection>
        </StyledServices>
    );
}

const StyledServices = styled.div`
    padding: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledCardsSection = styled.div`
    display:flex;
    margin-top: 5rem;
    justify-content: space-between;
    align-items: center;
`;




export default Services;