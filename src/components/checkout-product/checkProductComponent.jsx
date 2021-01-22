import React from "react";
import CustomButton from "../custom-button/customButtonComponent";
import "./checkProduct.styles.css";
import {useStateValue} from '../../provider/StateProvider'
const CheckoutProduct = ({ product, index }) => {
	const { id, title, price, image, rating } = product;
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			index: index
		});
	};
	return (
		<div className="checkoutProduct">
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
							<p>⭐</p>
						))}
				</div>
				<div className="checkoutProduct__button">
				</div>
				<CustomButton onClick={removeFromBasket}>Remove from basket</CustomButton>
			</div>
			
		</div>
	);
};

export default CheckoutProduct;
