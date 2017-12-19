import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top yellow accent-4 scrolling-navbar">
			<div className="container">
				<a className="navbar-brand" href="#">Cooking.io</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto smooth-scroll">
						<li className="nav-item">
							<a className="nav-link" href="#intro">Home</a>
						</li>
						<li className="nav-item">
								<a className="nav-link" href="#best-features">Getting Started</a>
						</li>
						<li className="nav-item">
								<a className="nav-link" href="#examples">Recipes</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
