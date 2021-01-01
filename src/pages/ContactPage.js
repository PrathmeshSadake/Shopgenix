import React from 'react';
import Contact from '../components/Contact';

import styled from 'styled-components';

const ContactPage = () => {
    return(
        <StyledContactPage>
        <Contact/>
        </StyledContactPage>
    );
}

const StyledContactPage = styled.div`
height: 100vh;
    background-color: #1f2833`;

export default ContactPage;