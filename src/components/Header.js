import React from "react";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
function Header() {
  return (
    <Row className="my-3">
      <Col sm={12} className=" title justify-content-center text-center">
       <Fade left>
       <h3>قائمة الطعام</h3>
        </Fade> 
        <div className="justify-content-center d-flex my-2">
        <Fade right>  <p className="underline "></p> </Fade>
        </div>{" "}
      </Col>
    </Row>
  );
}

export default Header;
