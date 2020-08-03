// node_modules
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Home from './views/Home';

// css
import './App.css';

function App(props) {
	console.log('userId from Reducer =', props.userId);

	return (
		<Router>
			<div className="App">
				<header>React + Router + Redux (Thunk) Boilerplate (CRA)</header>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

const mapStateToProps = state => {
	const { auth } = state;

	return {
		userId: auth.userId,
	};
};

export default connect(mapStateToProps)(App);
