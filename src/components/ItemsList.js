import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';

function ItemsList({ itemsData }) {
  return (
    <Row>
      <Zoom>
      {itemsData.length > 1 ? (
        itemsData.map((item) => (
          <Col key={item.id} sm={12} className="mb-3">
            <Card className="d-flex flex-row" style={{ background: "#f8f8f8" }}>
              <Card.Img
                style={{ width: "250px", height: "190px", borderRadius: "8px" }}
                variant="top"
                src={item.imgUrl}
                alt="image"
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">{item.price}</p>
                </Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <h3 className="text-center">لا يوجد أصناف الآن</h3>
      )}
      </Zoom>
    </Row>
  );
}

export default ItemsList;
