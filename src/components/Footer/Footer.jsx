import React from "react";

import { Col, Container, Image, Row } from "react-bootstrap";
import "../static/css/Footer.css";
import twitterLogo from "../static/images/twitter.png";
import facebookLogo from "../static/images/facebook.png";
import pinterestLogo from "../static/images/pinterest.png";
import instagramLogo from "../static/images/instagram.png";
import rssFeedIcon from "../static/images/RSS-feed.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer py-3">
        <Container>
          <Row className="my-2">
            <Col>
              <ul className="text-uppercase list-unstyled">
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Singapore
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Politics
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Asia
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="text-uppercase list-unstyled">
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    World
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Videos
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Multimedia
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="text-uppercase list-unstyled">
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Food
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Forum
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="text-uppercase list-unstyled">
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Opinion
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Business
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Sport
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="text-uppercase list-unstyled">
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Tech
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse" href="#somelink">
                    Games
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="text-uppercase">^ Back to top</Col>
          </Row>
          <Row className="my-2">
            <Col md lg={4}>
              <h3 className="brand text-uppercase my-0">The Straits Times</h3>
              <div className="brand-details small">
                SPH Digital News / Copyright © 2020 Singapore Press Holdings
                Ltd. Co. Regn. No. 1298392842E. All rights reserved
              </div>
            </Col>
            <Col md lg={5}>
              <ul className="brand-details list-unstyled">
                <li>
                  <a className="footer-link-inverse small" href="#somelink">
                    > Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse small" href="#somelink">
                    > Data Protection Policy
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse small" href="#somelink">
                    > Need help? Reach us here.
                  </a>
                </li>
                <li>
                  <a className="footer-link-inverse small" href="#somelink">
                    > Advertise with us
                  </a>
                </li>
              </ul>
            </Col>
            <Col md lg={3}>
              <div className="text-uppercase">Follow ST</div>
              <a href="#somelink">
                <Image className="icon mr-1" src={twitterLogo} />
              </a>
              <a href="#somelink">
                <Image className="icon mr-1" src={facebookLogo} />
              </a>
              <a href="#somelink">
                <Image className="icon mr-1" src={pinterestLogo} />
              </a>
              <a href="#somelink">
                <Image className="icon mr-1" src={instagramLogo} />
              </a>
              <a href="#somelink">
                <Image className="icon mr-1" src={rssFeedIcon} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
