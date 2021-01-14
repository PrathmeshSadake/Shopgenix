import React from 'react';
import styled from 'styled-components';


export default function Card(){
    return(
        <StyledCard>
            <img src="https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg" alt="crd-img" height="100px"/>
            <h3>Front end web Development</h3>
            <p>
            React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
            </p>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    min-height: 350px;
    width: 275px;
    overflow-x: hidden;
    padding: 50px 35px;
    background: white;
    color: #000;
    border: 1px solid #4A65F2;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px  whitesmoke;
    text-align: center;
`;