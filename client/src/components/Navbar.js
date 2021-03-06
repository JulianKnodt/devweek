import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLogin: false,
			username: ''
		};

		this.getUser = this.getUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getUser() {
		this.setState({isLogin: true});
		axios.get('/user?id=' + this.state.username)
			.then(function() {
				this.setState({isLogin: true});
			}).catch(function(err) {
				console.log('error', err);
			});
	}

	handleChange(event) {
		console.log(this.state.username, 'handleChange');
		this.setState({username: event.target.value});
	}

	render() {
		const header = this.state.isLogin ? (
			<nav className="navbar-side">
				<Link to='/explore'>
					<i className="fa fa-search fa-2x" aria-hidden="true" />
				</Link>
				<span>explore</span>
				<Link to='/purse'>
					<i className="fa fa-diamond fa-2x" aria-hidden="true" />
				</Link>
				<span>collection</span>
        <Link to='/upload'>
          <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
        </Link>
        <span>upload</span>
			</nav>
		) : (
			<nav className="navbar">
				<span>
					<h3>PURSE</h3>
				</span>
				<Link to='/signin'>
					<span className="btn">SIGN UP</span>
				</Link>
				<Link to='/explore'>
					<span className="btn" onClick={this.getUser}>LOG IN</span>
				</Link>
				<span><input placeholder="password" type="text" value={this.state.username} onChange={this.handleChange} /></span>
				<span><input placeholder="username" /></span>
			</nav>
		)

		return header
	}
}

export default NavBar
