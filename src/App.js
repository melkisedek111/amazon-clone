import React from "react";
import "./App.css";
import Header from "./components/header/headerComponent";
import HomePage from "./pages/home/homeComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/checkout/checkoutComponent";
function App() {
	return (
		<Router>
			<div className="app ">
				<Header />
				<Switch>
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route path='/' component={HomePage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
