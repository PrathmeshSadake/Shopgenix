import React from 'react';
import './nav-styles.css';

import { Link } from 'react-router-dom'

import menuIcon from '../img/menu.svg';
import logo from '../img/logo.svg'
import styled from 'styled-components';

const Nav = () => {
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
    return(
        <StyledNav>
          <div>
            <img src={logo} width="45px" alt="navbar-logo"/>
            <StyledNameLogo> Prathmesh.</StyledNameLogo>
          </div>
            <div id="myNav" className="overlay">
<Link className="closebtn" onClick={closeNav}>&times;</Link>
<div className="overlay-content">
  <Link to="/" onClick={closeNav}>About</Link>
  <Link to="/" onClick={closeNav}>Services</Link>
  <Link to="/" onClick={closeNav}>Clients</Link>
  <Link to="/contact" onClick={closeNav}>Contact</Link>
</div>

</div>

<Link  href="#f" onClick={openNav}>
  <img src={menuIcon} alt="menu icon" height="40"/>
</Link>
        </StyledNav>
    );
}


const StyledNav = styled.nav`
  display:flex;
  justify-content: space-between;
  padding: 1rem 8rem 0.2rem 8rem;
  align-items:center;
  color:#fff;
  background-color: #1f2833; 
`;

const StyledNameLogo = styled.span`
  margin-top : -26px;
  font-size: 35px;
`;

export default Nav;