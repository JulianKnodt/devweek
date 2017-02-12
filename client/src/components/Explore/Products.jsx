import React, { Component } from 'react'
import ProductList from '../common/ProductList.jsx'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {id: 1, title: 'Good Song', description: 'My good song'},
        {id: 2, title: 'Bad Song', description: 'My bad song'},
      ]
    }
  }
  componentWillMount() {
    // load available files
  }
  render() {
    return (
      <ProductList products={ this.state.products }/>
    )
  }
}

export default Products