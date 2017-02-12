import React from 'react'
import ProductListItem from './ProductListItem'

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
