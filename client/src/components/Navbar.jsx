import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  render() {
    const header = this.state.isLogin ? (
        <header>
          <nav className="navbar-side">
            <Link to='/explore'><span>Explore</span></Link>
            <Link to='/myitems'><i className="fa fa-diamond" aria-hidden="true">Gems</i></Link>
          </nav>
        </header>
      ) : (
        <header>
          <nav className="navbar">
            <Link to='/'><span>Log in</span></Link>
            <Link to='/signin'><span>Sign in</span></Link>
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
