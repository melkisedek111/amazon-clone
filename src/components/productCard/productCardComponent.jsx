import React from "react";
import "./productCard.styles.css";
// import { useStateValue } from "../../provider/StateProvider";
import CustomButton from "../custom-button/customButtonComponent";
import { connect } from "react-redux";
import { addItemToCart } from "../../reducer/cart/cartActions";
const ProductCard = ({ product, addItemToCart }) => {
	const { id, title, price, image, rating } = product;
	// const [{ basket }, dispatch] = useStateValue();
	// const addToBasket = () => {
	// 	dispatch({
	// 		type: "ADD_TO_BASKET",
	// 		item: { ...product },
	// 	});
	// };
	return (
		<div className="productCard">
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
							<p>⭐</p>
						))}
				</div>
			</div>
			<CustomButton type="button" onClick={() => addItemToCart(product)}>
				Add to Basket
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (product) => dispatch(addItemToCart(product)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
