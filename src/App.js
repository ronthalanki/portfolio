import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Proj1 from './pages/Proj1.js'
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<div>
						<Link className="App-link" to="/">Home</Link>
						&nbsp;|&nbsp;
            			<Link className="App-link" to="/proj1">Project 1</Link>
					</div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/proj1">
							<Proj1 />
						</Route>
					</Switch>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
