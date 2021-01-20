import React from "react";
import "./App.css";
import Header from './components/header/headerComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="app ">
			<Header/>
		</div>
	); 
}

export default App;
