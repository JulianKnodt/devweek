import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render() {
    const header = this.state.isLogin ? (
        <header>
          <nav className="navbar-side">
            <Link to='/explore'><i className="fa fa-search fa-2x" aria-hidden="true"></i></Link>
            <span>explore</span>
            <Link to='/myitems'><i className="fa fa-diamond fa-2x" aria-hidden="true"></i></Link>
            <span>my gems</span>
          </nav>
        </header>
      ) : (
        <header>
          <nav className="navbar">
            <Link to='/signin'><span className="btn">Sign in</span></Link>
            <Link to='/explore'><span className="btn" onClick={ () => { this.setState({isLogin: !this.state.isLogin}); } }>Log in</span></Link>
            <span><input placeholder="password"></input></span>
            <span><input placeholder="username"></input></span>
          </nav>
        </header>
      );
    return (
      <div>
        {header}
      </div>
    );
  }
}

export default NavBar;
