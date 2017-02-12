import React from 'react'

const ProductListItem = ({product}) => {
  return (
    <div className="product">
      <h4>Product Title</h4>
      <p>Product Description</p>
      <button>Barter</button>
      <button>Purchase</button>
    </div>
  )
}

export default ProductListItem;