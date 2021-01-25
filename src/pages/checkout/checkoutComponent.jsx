import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutProduct from "../../components/checkout-product/checkProductComponent";
import Subtotal from "../../components/subtotal/subtotalComponent";
import { useStateValue } from "../../provider/StateProvider";
import { selectCartItems } from "../../reducer/cart/cartSelector";
import { selectCurrentUser } from "../../reducer/user/userSelector";
import "./checkout.styles.css";
import { v4 as uuidv4 } from "uuid";
const CheckoutPage = ({ cartItems, currentUser }) => {
	// const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
					className="checkout__ad"
				/>
				<div>
					<h3>Hello, {currentUser?.email}</h3>
					<h2 className="checkout__title">Your shopping basket</h2>
				</div>
				{cartItems.map((product, idx) => (
					<CheckoutProduct key={uuidv4()} product={product} index={idx} />
				))}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
