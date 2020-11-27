import React, { Component } from 'react';


import './header.styles.scss';

class Header extends Component {
    render() {
        return (
           <div className="section-header">

                <div className="row header">
                {/* <div className="nav">
                    <ul>
                        <li>
                            <a href="#ww">Home</a>
                        </li>
                        <li>
                            <a href="#ww">About</a>
                        </li>
                        <li>
                            <a href="#ww">Resume</a>
                        </li>
                        <li>
                            <a href="#ww">Projects</a>
                        </li>
                        <li>
                            <a href="#ww">Contact</a>
                        </li>
                    </ul>
                </div> */}
                <div className="text-box">
                    <h1>
                        My name is <span><a href="test">Prathmesh Sadake,</a></span> I'm a multi-disciplinary frontend web &amp;
                        mobile app developer.
                    </h1>
                    <a className="btn-more" href="dem">more</a>
                    <div className="icons-section">
                        <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/github.svg'} alt=""/></a>
                        <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/linkedin.svg'} alt=""/></a>
                        <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/instagram.svg'} alt=""/></a>
                        <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/twitter.svg'} alt=""/></a>
                        <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/facebook.svg'} alt=""/></a>
                    </div>
                </div>
            </div>
           </div>
        );
    }
}

export default Header;