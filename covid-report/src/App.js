import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import State from './Components/State';
import World from './Components/World';
import India from './Components/India';
import Header from './Components/Header';

function App() {
	return (
    	<div className="container-fluid">
    		
    		<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<India />
					</Route>
					<Route exact path="/india">
						<India />
					</Route>
					<Route path="/world">
						<World />
					</Route>
					<Route path="/state">
						<State />
					</Route>
				</Switch>
    		</BrowserRouter>
    	</div>
	);
}

export default App;
