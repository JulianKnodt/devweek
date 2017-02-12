import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = ({products, handleBarter}) => {
  return (
    <div className="productList">
    { products.map(p => {
      return <ProductListItem key={p.id} product={p} handleBarter={handleBarter}/>
    })}
    </div>
  )
}

export default ProductList
