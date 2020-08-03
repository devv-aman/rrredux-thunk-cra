// node_modules
import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
	console.log('userId from Reducer =', props.userId);

	return (
		<div>
			<p>Home</p>
		</div>
	);
};

const mapStateToProps = state => {
	const { auth } = state;

	return {
		userId: auth.userId,
	};
};

export default connect(mapStateToProps)(Home);
