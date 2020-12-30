import React from 'react'
import styled from 'styled-components';

export default function SkillTag({skill}) {
    return (
        <StyledSkillTag>
            {skill}
        </StyledSkillTag>
    )
}

const StyledSkillTag = styled.div`
    display: inline;
    padding: 5px 10px;
        font-family: 'Lato', sans-serif; 
        font-size: 14px;
    margin: 10px 15px 0px 0px;
    /* text-transform: capitalize; */
    letter-spacing: 1px;
    border: 1px solid #66fcf1;
    border-radius: 5px;
    color: white;
`;
