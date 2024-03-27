import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {data_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = data_product.find((e) =>
    e.id===Number(productId)
  )
  return (
    <div>Product</div>
  )
}

export default Product