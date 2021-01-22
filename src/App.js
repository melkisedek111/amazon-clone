import React from "react";
import "./App.css";
import Header from "./components/header/headerComponent";
import HomePage from "./pages/home/homeComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/checkout/checkoutComponent";
import LoginPage from "./pages/login/loginComponent";
function App() {
	return (
		<Router>
			<div className="app ">
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/checkout">
						<Header />
						<CheckoutPage />
					</Route>
					<Route path="/">
						<Header />
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
