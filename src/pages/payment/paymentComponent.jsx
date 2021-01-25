import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartItemsCount,
	selectTotalCartItems,
} from "../../reducer/cart/cartSelector";
import { selectCurrentUser } from "../../reducer/user/userSelector";
import "./payment.styles.css";
import CheckoutProduct from "../../components/checkout-product/checkProductComponent";
import { v4 as uuidv4 } from "uuid";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import CustomButton from "../../components/custom-button/customButtonComponent";
import axios from "axios";

const PaymentPage = ({
	currentUser,
	cartItems,
	cartItemsCount,
	totalCartItems,
}) => {
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent = payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				history.replace('/orders ')
			});
	};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	useEffect(() => {
		// Generate the special stripe secret which allwos us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: "POST",
				// stripe expects the total in a currencies submits
				url: `/payment/create?total=${totalCartItems * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [cartItems]);
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link>{cartItemsCount} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{currentUser?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{cartItems.map((item, index) => (
							<CheckoutProduct key={uuidv4} product={item} index={index} />
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<p>
												Order Total ({cartItemsCount} items):
												<strong>{value}</strong>
											</p>
											<small className="subtotal__gift">
												<input type="checkbox" /> This order
											</small>
										</>
									)}
									decimalScale={2}
									value={totalCartItems}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<CustomButton disabled={processing || disabled || succeeded}>
									<span>
										{processing ? <p>Processing . . .</p> : "Buy Now"}
									</span>
								</CustomButton>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartItems: selectCartItems,
	cartItemsCount: selectCartItemsCount,
	totalCartItems: selectTotalCartItems,
});

export default connect(mapStateToProps)(PaymentPage);
