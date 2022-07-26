import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FOOTER = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">copyright &copy; Best Shose</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FOOTER;
