import React from "react";
import CustomButton from "../custom-button/customButtonComponent";
import "./basketList.styles.css";

const BasketList = ({ product }) => {
	const { id, title, price, image, rating } = product;

	return (
		<div className="basketList">
			<img src={image} alt="" className="basketList__image" />
			<div className="basketList__info">
				<h2 className="basketList__title">{title}</h2>
				<div className="basketList__price">
					<small>$</small>
					<strong>{price}</strong>
				</div>
				<div className="basketList__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<CustomButton>Remove from basket</CustomButton>
		</div>
	);
};

export default BasketList;
