import React from 'react';
import Header from './components/Header/Header.component';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userData : null,
    }
  }

  getData=()=>{
    fetch('resume.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then((myJson)=>(
        this.setState({
          userData : myJson,
        })
      ));
  }

  componentDidMount(){
    this.getData();
  }
  render(){
  return (
    <div className="App">
<Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
<div className="row">
<Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</div>
</Navbar>
      <Header />
    </div>
  );
}
}

export default App;
