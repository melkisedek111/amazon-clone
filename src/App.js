import React from "react";
import "./App.css";
import Header from './components/header/headerComponent';
import HomePage from './pages/home/homeComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="app ">
			<Header/>
			<HomePage />
		</div>
	); 
}

export default App;
