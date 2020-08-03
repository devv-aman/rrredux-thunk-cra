// node_modules
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// components
import Home from './views/Home';

// css
import './App.css';

function App() {
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

export default App;
