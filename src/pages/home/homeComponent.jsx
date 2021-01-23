import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./home.styles.css";
import ProductCard from "../../components/productCard/productCardComponent";
import { selectShopCollections } from "../../reducer/shop/shopSelector";
import { selectCurrentUser } from "../../reducer/user/userSelector";
import { useHistory } from "react-router-dom";

const HomePage = ({fetchShopData, currentUser}) => {
	const history = useHistory();
	// useEffect(() => {
	// 	if(!currentUser) {
	// 		history.push('/login');
	// 	}
	// }, [currentUser])

	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="banner"
				/>
				<div className="home__row">
					{fetchShopData
						.filter((product, idx) => idx < 2)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
				<div className="home__row">
					{fetchShopData
						.filter((product, idx) => idx > 1 && idx < 5)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
				<div className="home__row">
					{fetchShopData
						.filter((product, idx) => idx > 4)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	fetchShopData: selectShopCollections,
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(HomePage);
