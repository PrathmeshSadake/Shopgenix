import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
      <img
        src={process.env.PUBLIC_URL + '/logo.png'}
        width="65"
        height="65"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="#deets">Projects</Nav.Link>
      <Nav.Link href="#linkedin">Linked.com &#8599;	</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
