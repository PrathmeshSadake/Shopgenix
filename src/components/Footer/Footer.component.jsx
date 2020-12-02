import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from '../SocialIcons/SocialIcons.component';

import './footer.styles.scss';

class Footer extends Component {
    render() {
        return (
            <div className="section-footer">
                <Container>
                  <Row>
                    <Col className="contact-section">
                    <h3 className="contact">contact</h3>
                    <p className="address">
                        Navi mumbai, India - 400614
                    </p>
                    <p className="email">
                      <img src={process.env.PUBLIC_URL + '/assets/images/gmail.svg'} alt="gmail"/>
                      prathmeshsadake@gmail.com  
                    </p>
                    </Col>
                    <Col  className="credits">
                    <SocialIcons/>
                        <p>Made with ❤️ and dedication by <span><a href="test">Prathmesh Sadake</a></span></p>
                        <a className="footer-btn" href="test">See my work</a>
                      </Col>
                    <Col className="navigate-section">
                    <h3 className="navigate">navigate</h3>
                    <ul>
                        <li><a href="test">home</a></li>
                        <li><a href="test">About</a></li>
                        <li><a href="test">Resume</a></li>
                        <li><a href="test">Projects</a></li>
                    </ul>
                    
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;