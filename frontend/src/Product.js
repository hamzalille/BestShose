import {Card} from 'react-bootstrap'
import React from 'react'
import Rating from './components/Rating'

const Product = ({product} ) => {
  return (
    <Card className="my-3 p3 rounded">
      <a href={`/product/${product._id}`}>  
        <Card.Img src={product.image} variant='top'/>
      </a>
      <h3>{product.name}</h3>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      <h3>Stock: {product.countInStock}</h3>
    </Card>
    // TESTS ONLY
  )
}

export default Product
