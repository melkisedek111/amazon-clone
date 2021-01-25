import React, { forwardRef } from "react";
import CustomButton from "../custom-button/customButtonComponent";
import "./checkProduct.styles.css";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../reducer/cart/cartActions";
// const CheckoutProduct = forwardRef((props, ref) => {
// 	const { removeItemFromCart, product, index } = props;
// 	const { title, price, image, rating } = product;
// 	return (
// 		<div ref={ref} className="checkoutProduct">
// 			<img src={image} alt="" className="checkoutProduct__image" />
// 			<div className="checkoutProduct__info">
// 				<h2 className="checkoutProduct__title">{title}</h2>
// 				<p className="checkoutProduct__price">
// 					<small>$</small>
// 					<strong>{price}</strong>
// 				</p>
// 				<div className="checkoutProduct__rating">
// 					{Array(rating)
// 						.fill()
// 						.map((_, i) => (
// 							<p key={i}>⭐</p>
// 						))}
// 				</div>
// 				<div className="checkoutProduct__button"></div>
// 				<CustomButton onClick={() => removeItemFromCart(index)}>
// 					Remove from basket
// 				</CustomButton>
// 			</div>
// 		</div>
// 	);
// });
const CheckoutProduct = ({ removeItemFromCart, product, index }) => {
	const { title, price, image, rating } = product;
	return (
		<div className="checkoutProduct" >
			<img src={image} alt="" className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<h2 className="checkoutProduct__title">{title}</h2>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<div className="checkoutProduct__button"></div>
				<CustomButton onClick={() => removeItemFromCart(index)}>
					Remove from basket
				</CustomButton>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItemFromCart: (index) => dispatch(removeItemFromCart(index)),
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
