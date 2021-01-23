import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutProduct from "../../components/checkout-product/checkProductComponent";
import Subtotal from "../../components/subtotal/subtotalComponent";
import { useStateValue } from "../../provider/StateProvider";
import { selectCartItems } from "../../reducer/cart/cartSelector";
import "./checkout.styles.css";

const CheckoutPage = ({cartItems}) => {
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
					<h2 className="checkout__title">Your shopping basket</h2>
				</div>
				{cartItems.map((product, idx) => (
					<CheckoutProduct key={idx} product={product} index={idx}/>
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
});

export default connect(mapStateToProps)(CheckoutPage);
