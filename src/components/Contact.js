import React from 'react';
import styled from 'styled-components';
import SocialComponent from './SocialComponent';

import ContactForm from './ContactForm';

const Contact =()=>{
    return(
        <StyledContact>
            <ContactSection >
                <h2 className="heading-contact">Get in Touch</h2>
                <h4 className="description-contact">If you have any questions please feel free to drop me a line. I will get back to you as soon as I can. That's a promise</h4>
                <SocialComponent/>
            </ContactSection>
            <FormSection>
                <h2>Got a project?</h2>
                <h3>Let's Talk!</h3>
                <ContactForm/>
            </FormSection>
</StyledContact>
    );
}

const StyledContact = styled.div`
    padding: 0 10rem;
    color: #000;
    min-height: 85vh;
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const ContactSection = styled.div`
    flex: 1;
    h2{
        margin-bottom: 1.5rem;
        font-size: 3rem;
    }
    h4{
        margin-bottom: 2rem;
        font-size: 2rem;
    }
`;
const FormSection = styled.div`
    padding-left: 10rem;
    flex: 1.25;
    h2{
        margin-bottom: .5rem;
    }
    h3{
        margin-bottom: 1rem;
    }
`;


export default Contact;