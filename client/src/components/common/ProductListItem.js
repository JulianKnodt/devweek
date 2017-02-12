import React from 'react'
import Barter from '../Barter.js'

const ProductListItem = ({product, handleBarter}) => {
  var divStyle = {
    backgroundImage: 'url(' + product.image + ')',
    backgroundSize: 'cover'
  }
  return (
    <div className="product">
      <div className="product-img" style={divStyle}></div>
      <h4>{product.title}</h4>
      <p>@{product.username}</p>
      <button onClick={() => handleBarter()} handleBarter={handleBarter}>Barter</button>
      <button>Purchase</button>
    </div>
  )
}

export default ProductListItem;