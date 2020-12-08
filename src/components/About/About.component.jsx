import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about-styles.scss';

export default class About extends Component {
    render() {
        return (
            <div className="section-about">
                <Container>
  <Row>
  <Col xs={4} md={3}>
      <h3>
          Background
      </h3>
    </Col>
    <Col xs={12} md={9}>
   <p>
   Hi I'm Prathmesh, a Frontend Web Developer & Computer Science Engineer who loves building webpages and Software products. I’d love to combine my passion for learning and developing with my software development skills to continue building personalized products for people.
   </p>
    <p>
    As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.

When I'm not in front of a computer screen, I'm probably snowboarding, cruising around on my penny board, or crossing off another item on my bucket list.
    </p>
    </Col>
  </Row>
  <Row className="section-skills">
  <Col xs={4} md={3}>Skills</Col>
    <Col xs={12} md={9}>
    <Row xs={2} md={4} lg={6}>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
    </Col>
    
  </Row>
               </Container>
            </div>
        );
    }
}
