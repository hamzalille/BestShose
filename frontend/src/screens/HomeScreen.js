import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row className="m-3">
        <h1>Nos produits</h1>
      </Row>
      <Row>
        {Products.map((product) => (
          <Col sm={12} md={6} lg={4} xL={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
