import React, { Component } from 'react';

import './social-icons.styles.scss';

export default class SocialIcons extends Component {
    render() {
        return (
        <div className="icons-section">
            <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/github.svg'} alt=""/></a>
            <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/linkedin.svg'} alt=""/></a>
            <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/instagram.svg'} alt=""/></a>
            <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/twitter.svg'} alt=""/></a>
            <a href="ww" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/assets/images/facebook.svg'} alt=""/></a>
        </div>
        )
    }
}
