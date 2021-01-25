import React from "react";
import "./productCard.styles.css";
// import { useStateValue } from "../../provider/StateProvider";
import CustomButton from "../custom-button/customButtonComponent";
import { connect } from "react-redux";
import { addItemToCart } from "../../reducer/cart/cartActions";
const ProductCard = ({id, title, price, image, rating, addItemToCart }) => (
	<div className="productCard hvr-grow">
		<img src={image} alt="" />
		<div className="productCard__info">
			<p>{title}</p>
			<p className="productCard__price">
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className="productCard__rating">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<p key={i}>⭐</p>
					))}
			</div>
		</div>
		<CustomButton type="button" onClick={() => addItemToCart({id, title, price, image, rating,})}>
			Add to Basket
		</CustomButton>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (product) => dispatch(addItemToCart(product)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
