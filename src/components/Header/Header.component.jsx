import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation.component';

import './header.styles.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="section-header">
                <Navigation/>
                <Container fluid className="main-content">
                <Row>
                    <Col sm={8}>
                    <h1 className="welcome-text">
                    hello! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="shaking-hand-gif"></img>
                    </h1>
                    <div className="text-box">
                    <h2 className="heading-text">
                        myself <span><a href="testing">Prathmesh Sadake</a></span>, I'm a multi-disciplinary and a design-minded frontend web and mobile app developer.
                    </h2>
                    <div className="view-more">
                    <a href="#wel">
                        Get in touch &#8594; prathmeshsadake@gmail.com
                    </a>
                    </div>
                    </div>
                    </Col>
                    <Col sm={4}>
                        <div className="header-image">
                        <img src={process.env.PUBLIC_URL + '/Assets/male2.svg'} alt=""/>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
