import React from 'react'

class Barter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myproducts: [{id: 1, title: 'vulputate adversarium', description: 'Lorem ipsum dolor sit amet, ius vide voluptua ad, pro et modo exerci petentium.', image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Themusic.themusic.albumcover.jpg', username: 'Julian'},
              {id: 2, title: 'et modo exerci', description: 'Quem amet inermis pri ne, ut has vulputate adversarium, in latine malorum lobortis qui.', image: 'https://digitalsynopsis.com/wp-content/uploads/2016/01/hyperrealistic-3d-art-drawings-sushant-rane-fried-egg-3.jpg', username: 'Julian'},
              {id: 3, title: 'inermis', description: 'Wisi paulo nostrud an per, ut tractatos voluptatum constituam sea.', image: 'http://learningthreejs.com/data/2015-09-24-learning-three-dot-js-news-number-15-creative-3d-demos-of-the-week/screenshots/mapzen.jpg', username: 'Julian'}]
    }
  }

  render() {

    var myThings = this.state.myproducts.map(function(item) {
      var divStyle = {
        backgroundImage: 'url(' + item.image + ')',
        backgroundSize: 'cover'
      }
      return (
        <div className="barter">
          <div className="product-img" style={divStyle}></div>
          <h4>{item.title}</h4>
          <button onClick={() => this.props.handleBarter()}>Choose</button>
        </div>
        )
      })

    return (
      <div className="barter-container">
        <h2>My Products</h2>
        {myThings}
      </div>
    );
  }
}
export default Barter;