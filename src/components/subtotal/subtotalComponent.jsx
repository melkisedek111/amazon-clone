import React from "react";
import "./subtotal.styles.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../provider/StateProvider";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItemsCount,
	selectTotalCartItems,
} from "../../reducer/cart/cartSelector";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../custom-button/customButtonComponent";
const Subtotal = ({ cartItemsCount, totalCartItems }) => {
	// const [{ basket }, dispatch] = useStateValue();
	// const totalValue = basket?.reduce((total, {price}) => total + price, 0);
	const history = useHistory();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cartItemsCount} items):
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
			<Link to="/payment">
				<CustomButton>Proceed to Checkout</CustomButton>
			</Link>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItemsCount: selectCartItemsCount,
	totalCartItems: selectTotalCartItems,
});

export default connect(mapStateToProps)(Subtotal);
