import React from "react";
import BasketList from "../../components/basket-list/basketListComponent";
import Subtotal from "../../components/subtotal/subtotalComponent";
import { useStateValue } from "../../provider/StateProvider";
import "./checkout.styles.css";

const CheckoutPage = () => {
	const [{ basket }, dispatch] = useStateValue();
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
				{basket.map((product) => (
					<BasketList key={product.id} product={product} />
				))}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};

export default CheckoutPage;
