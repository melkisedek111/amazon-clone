import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/headerComponent";
import HomePage from "./pages/home/homeComponent";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import CheckoutPage from "./pages/checkout/checkoutComponent";
import LoginPage from "./pages/login/loginComponent";
import { auth } from "./firebase/firebase.utls";
import { useStateValue } from "./provider/StateProvider";
import { connect } from "react-redux";
import { setCurrentUser } from "./reducer/user/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./reducer/user/userSelector";
import PaymentPage from "./pages/payment/paymentComponent";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
	"pk_test_51Guub0ESprxiEf1pGomNfB1hTwrbZDQfMlQyNztkIrTuJHx2O6fF11UrgG080nd9jZY4PppmkBuOKkcNWe4GBlSI00zvGQdzYN"
);
function App({ setCurrentUser, currentUser }) {
	// const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				const { email, uid } = authUser;
				setCurrentUser({ email, uid });
			} else {
				setCurrentUser(null);
			}
		});
	}, []);
	return (
		<Router>
			<div className="app ">
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/checkout">
						<Header />
						<CheckoutPage />
					</Route>
					<Route exact path="/payment">
						<Header />
						<Elements stripe={promise}>
							<PaymentPage />
						</Elements>
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

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
