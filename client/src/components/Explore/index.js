import React, { Component } from 'react'
import ProductList from '../common/ProductList'
// import Search from '../common/Search'

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
        // <Search />
    // update when searching display filtered products
  }
  render() {
    return (
      <div className="explore">
        <h3>Share, Collborate, Barter</h3>
        <div className="searchbar">
        <input placeholder="what are you looking for?"></input><span className="btn">Search</span>
        </div>
        <ProductList products={ this.state.products }/>
      </div>
    )
  }
}



export default Explore

