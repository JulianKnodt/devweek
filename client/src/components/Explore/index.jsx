import React, { Component } from 'react';
import ProductList from '../common/ProductList.jsx'
import Search from './Search.jsx'

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
  inputChangeHandler(val) {
    console.log('val:', val)
    // update when searching display filtered products
  }
  displayedProducts() {
    
  }
  render() {
    return (
      <div>
        <Search onType={this.inputChangeHandler.bind(this)} />
        <h3>Explore</h3>
        <ProductList products={ this.state.products }/>
      </div>
    )
  }
};



export default Explore;

