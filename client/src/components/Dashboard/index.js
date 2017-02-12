import React, { Component } from 'react'
import ProductList from '../common/ProductList'
import Search from '../common/Search'
import parsePath from '../../util'
import Barter from '../Barter'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      filteredProducts: [],
      products: [
        {id: 1, title: 'vulputate adversarium', description: 'Lorem ipsum dolor sit amet, ius vide voluptua ad, pro et modo exerci petentium.', image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Themusic.themusic.albumcover.jpg', username: 'Wendy'},
        {id: 2, title: 'et modo exerci', description: 'Quem amet inermis pri ne, ut has vulputate adversarium, in latine malorum lobortis qui.', image: 'https://digitalsynopsis.com/wp-content/uploads/2016/01/hyperrealistic-3d-art-drawings-sushant-rane-fried-egg-3.jpg', username: 'Chad'},
        {id: 3, title: 'inermis', description: 'Wisi paulo nostrud an per, ut tractatos voluptatum constituam sea.', image: 'http://learningthreejs.com/data/2015-09-24-learning-three-dot-js-news-number-15-creative-3d-demos-of-the-week/screenshots/mapzen.jpg', username: 'Eric'}
      ],
      apiEndpoint: '',
      pageTitle: '',
      username: 'Julian',
      showBarter: false
    }
  }

  componentWillMount() {
    const { pageTitle, apiEndpoint } = parsePath(this.props)
    this.setState({pageTitle, apiEndpoint})
  }
  componentDidMount() {
    // fetch files from server
    // fetch('http://devweek-purse.herokuapp.com' + this.state.apiEndpoint)
    //   .then(r => {
    //     console.log('r================>',r)
    //     this.setState({products: r.data })
    //   })
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
  handleBarter() {
    this.setState({showBarter: !this.state.showBarter})
  }
  render() {
    return (
      <div className="container">
        <h1>Hi, {this.state.username}!</h1>
        <Search className="searchbar" cb={this.inputChangeHandler.bind(this)} />
        <h3>{this.state.pageTitle}</h3>
        <ProductList products={ this.displayedProducts() } handleBarter={this.handleBarter.bind(this)}/>
        {this.state.showBarter ? <Barter/> : null}
      </div>
    );
  }
}

export default Dashboard
