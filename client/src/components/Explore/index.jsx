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
  componentDidMount() {
    // fetch files
    // fetch('/api/products')
    // .then(r => this.setState({products: r.data }))
    // .catch(e => { console.log(e) })
  }
  inputChangeHandler(val) {
    this.setState({
      term: val,
      filteredProducts: this.state.products.filter(p=> {
        return p.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
      })
    })
  }
  displayedProducts() {
    const filterOn = this.state.term.length
    if (filterOn) {
      return this.state.filteredProducts
    }
    return this.state.products
  }
  render() {
    return (
      <div>
        <Search onType={this.inputChangeHandler.bind(this)} />
        <h3>Explore</h3>
        <ProductList products={ this.displayedProducts() }/>
      </div>
    )
  }
};



export default Explore;

