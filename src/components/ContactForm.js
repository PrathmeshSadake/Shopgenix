import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('prathmeshsadake', 'devfolio', e.target, 'user_fEbxvhJz6eR6PZeVmKu5z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <StyledForm className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>  
      <input type="text" placeholder="First and Last, please!" name="name" />
      <label>Email</label>  
      <input type="text" placeholder="How can I contact you ?" name="email" />
      <label>Subject</label>  
      <input type="text" placeholder="Subject" name="subject" />
      <label>Message</label>  
      <textarea type="text" placeholder="How can I help ?" name="message"/>
      <input type="submit" value="Send" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    label{
        margin-bottom: 5px;
    }
    input[type=text]{
        width: 70%;
  padding: 12px 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
    }
    textarea{
        width: 70%;
  height: 150px;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
    }
    input[type=submit]{
        background-color: #5750EB;
    width: 150px;
  border: none;
  color: white;
  padding: 16px 15px;
  text-decoration: none;
  margin: 1rem 2px;
  cursor: pointer;
    }
`;