import React, { Component } from 'react';
import ProductList from '../common/ProductList.jsx'
import Search from '../common/Search.jsx'

class Explore extends Component {
  constructor() {
    super()
    this.state = {
      term: '',
      filteredProducts: [],
      products: [
        {id: 1, title: 'Good Song', description: 'My good song'},
        {id: 2, title: 'Bad Song', description: 'My bad song'},
      ]
    }
  }
  componentWillMount() {
    // load available files
  }
  onInput() {
    // update when searching display filtered products
  }
  render() {
    return (
      <div>
        <h3>Explore</h3>
        <Search />
        <ProductList products={ this.state.products }/>
      </div>
    )
  }
};



export default Explore;

