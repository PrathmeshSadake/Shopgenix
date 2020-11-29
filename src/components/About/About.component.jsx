import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import SocialIcons from '../SocialIcons/SocialIcons.component';

import './about.styles.scss';

export default class About extends Component {
    render() {
        return (
           <div className="section-about" id="about">
                <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <h2 className="heading-about">
                            about
                        </h2>
                        <p className="copy-text">
                         Hi I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer
                         who loves building webpages and Software products. I’d love to combine my
                         passion for learning and developing with my software development skills
                         to continue building personalized products for people.
                        </p>
                        <SocialIcons/>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="section-about-img">
                            <img src={process.env.PUBLIC_URL + '/assets/images/about-section.jpeg'} alt="demo"/>
                        </div>
                    </Col>
                </Row>
                </Container>
           </div>
        )
    }
}
