import React from 'react'

const Home = () => {
  var divStyle = {
    backgroundImage: 'url(https://s-media-cache-ak0.pinimg.com/originals/b0/56/8c/b0568c50a99b99832d4388f2d8fb4fb2.jpg)',
    backgroundSize: 'cover'
  }
	return (
		<div className="container">
      <div className="header-img" style={divStyle}></div>
			<h1 className="header">Digital Marketplace for your projects</h1>
			<div className="learnmore">LEARN MORE</div>
		</div>
	)
}

export default Home;
