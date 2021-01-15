import React from 'react'
import styled from 'styled-components';

export default function Skill({skill}) {
    return (
        <StyledSkill>
            {skill}      
        </StyledSkill>
    );
}

const StyledSkill = styled.div`
    padding: 5px 10px;
    display: inline;
    color: white;
    color: #000;
    margin: 10px 20px 0 0;
    border: 1px solid #a0a0a0;
    box-shadow: 2px 2px #a0a0a0;
    text-transform: uppercase;
    letter-spacing: 1px;
`;
