import React, { Component } from 'react'
import './header.scss';


export default class Header extends Component {
    render() {
        return (
            <div className="section-header">
                <div className="nav row">
                    <a href="https://www.github.com/PrathmeshSadake/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.png'} alt="github-logo"/>
                    </a>
                    <ul>
                        <li>
                            <a href="https://demo">Home</a>
                        </li>
                        <li>
                            <a href="https://demo">About</a>
                        </li>
                        <li>
                            <a href="https://demo">Resume</a>
                        </li>
                        <li>
                            <a href="https://demo">Projects</a>
                        </li>
                        <li>
                            <a href="https://demo">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="header-text">
                        <h1>
                        My name is <span className="header-text name"><a href="Prathmesh Sadake">Prathmesh Sadake</a></span> & I'm a multi-disciplinary frontend web & mobile app developer.
                        {/* </h1>
                        <h1> */}
                         
                        </h1>
                </div>
            </div>
            </div>
        )
    }
}
