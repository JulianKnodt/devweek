import React from 'react'

const ProductListItem = ({product}) => {
  var divStyle = {
    backgroundImage: 'url(' + product.image + ')',
    backgroundSize: 'cover'
  }
  return (
    <div className="product">
      <div className="product-img" style={divStyle}></div>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <button>Barter</button>
      <button>Purchase</button>
    </div>
  )
}

export default ProductListItem;