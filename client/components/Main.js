import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Background from './Background';
import Landing from './Landing';

const Main = props => {
	return (
		<div>
			<Navbar />
			<Background />
			<Landing />
		</div>
	)
}

export default Main;
