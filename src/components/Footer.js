import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      as="footer"
      fluid
      bsPrefix="foot"
      className="mt-2 text-center bg-dark pt-5 pb-5"
    >
      <Row>
        <Col className="mb2 mt2 lightgrey">
          © 2020{" "}
          <a
            href="https://www.wildcodeschool.com/fr-FR"
            title="Wild Code School"
          >
            Wild Code School
          </a>{" "}
          - Made with love by{" "}
          <a
            href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/"
            title="LinkedIn Alyson"
          >
            Alyson.B
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
