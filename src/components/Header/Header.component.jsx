import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './header.styles.scss';

export default class Header extends Component {
    render() {
        return (
            <Container fluid className="header-bg">
            <Row>
               <Col>
                <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark">
                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                     <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                     <Nav.Link href="#features">Home</Nav.Link>
                     <Nav.Link href="#pricing">About</Nav.Link>
                     <Nav.Link href="#deets">Resume</Nav.Link>
                     <Nav.Link href="#memes">Projects</Nav.Link>
                     </Nav>
                     </Navbar.Collapse>
                </Navbar>
               </Col>
            </Row>
            <Row>
                <div className="text-box">
                    <h1 className="welcome-text">
                    hello <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="50px" alt="shaking-hand-gif"></img>
                    </h1>
                    <h1 className="heading-text">
                        my name is <span><a href="testing">Prathmesh Sadake</a></span>, I'm a multi-disciplinary frontend web and mobile app developer.
                    </h1>
                    <a className="custom-btn" href="testing">more</a>
                </div>
            </Row>
          </Container>
        )
    }
}
