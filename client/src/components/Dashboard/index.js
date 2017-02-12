import React, { Component } from 'react'
import ProductList from '../common/ProductList'
import Search from '../common/Search'
import parsePath from '../../util'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      filteredProducts: [],
      products: [
        {id: 1, title: 'vulputate adversarium', description: 'Lorem ipsum dolor sit amet, ius vide voluptua ad, pro et modo exerci petentium.', image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Themusic.themusic.albumcover.jpg'},
        {id: 2, title: 'et modo exerci', description: 'Quem amet inermis pri ne, ut has vulputate adversarium, in latine malorum lobortis qui.', image: 'https://digitalsynopsis.com/wp-content/uploads/2016/01/hyperrealistic-3d-art-drawings-sushant-rane-fried-egg-3.jpg'},
        {id: 3, title: 'inermis', description: 'Wisi paulo nostrud an per, ut tractatos voluptatum constituam sea.', image: 'http://learningthreejs.com/data/2015-09-24-learning-three-dot-js-news-number-15-creative-3d-demos-of-the-week/screenshots/mapzen.jpg'}
      ],
      apiEndpoint: '',
      pageTitle: ''
    }
  }
  componentWillMount() {
    const { pageTitle, apiEndpoint } = parsePath(this.props)
    this.setState({pageTitle, apiEndpoint})
  }
  componentDidMount() {
    // fetch files from server
    // fetch(this.state.apiEndpoint)
    //   .then(r => this.setState({products: r.data }))
    //   .catch(e => { console.log(e) })
  }
  inputChangeHandler(val) {
    this.setState({
      term: val,
      filteredProducts: this.state.products.filter(p=> {
        return p.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
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
        <Search className="searchbar" cb={this.inputChangeHandler.bind(this)} />
        <h3>{this.state.pageTitle}</h3>
        <ProductList products={ this.displayedProducts() }/>
      </div>
    );
  }
}

export default Dashboard
