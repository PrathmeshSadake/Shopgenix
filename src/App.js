import React, { Component } from 'react';
import Header from './components/Header/Header.component';
import About from './components/About/About.component';
import Resume from './components/Resume/Resume.component';
import Footer from './components/Footer/Footer.component';
import './App.scss';

class App extends Component  {
  render(){
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}
}

export default App;
