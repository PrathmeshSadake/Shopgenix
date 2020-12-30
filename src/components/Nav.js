import React from 'react';
import './nav-styles.css';

import { Link } from 'react-router-dom'

const Nav = () => {
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
    return(
        <div>
            <div id="myNav" className="overlay">
<Link className="closebtn" onClick={closeNav}>&times;</Link>
<div className="overlay-content">
  <Link to="/">About</Link>
  <Link to="/">Services</Link>
  <Link to="/">Clients</Link>
  <Link to="/">Contact</Link>
</div>

</div>

<Link  href="#f" onClick={openNav}>&times;</Link>
        </div>
    );
}

export default Nav;