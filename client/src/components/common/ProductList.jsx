import React from 'react'
import ProductListItem from './ProductListItem.jsx'

const ProductList = ({products}) => {
  return (
    <div>
    { products.map(p => {
      return <ProductListItem key={p.id} product={p} />
    })}
    </div>
  )
}

export default ProductList