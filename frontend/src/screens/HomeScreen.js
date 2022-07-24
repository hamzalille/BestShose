import React from 'react';
import {Row, Col }from 'react-bootstrap' 
import Product from '../Product'
import products from '../products'

const HomeScreen = () => {
    return( 
        <>
        
            <h1>latest products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12 } md={6} lg={4} xL={3}>
                        <Product product={product}/>
                    </Col>  
                ))}
            </Row>
            
        </>
    )}
    export default HomeScreen