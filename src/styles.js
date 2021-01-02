import styled from 'styled-components';

import {motion} from 'framer-motion';

export const StyledDiv = styled.div`
    min-height: 90vh;
    padding: 0rem 8rem;
    padding-top: 10rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #fff;
    @media (max-width: 1200px){
        display: flex;
        flex-flow: column-reverse;
        padding: 0rem;
    padding-top: 10rem ;

    }
`;

export const StyledLine = styled(motion.div)`
height: 2px;
background-color: #66fcf1;
width: 100%;
margin: 2rem 0;
`;