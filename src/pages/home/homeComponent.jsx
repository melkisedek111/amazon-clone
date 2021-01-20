import React from "react";
import "./home.styles.css";
import ProductCard from "../../components/productCard/productCardComponent";
const HomePage = () => {
	const products = [
		{
			id: 1,
			title:
				"Arlo Video Doorbell | HD Video Quality, 2-Way Audio, Package Detection | Motion Detection and Alerts | Built-in Siren | Night Vision | Easy Installation (Existing Doorbell Wiring Required) | (AVD1001)",
			image:
				"https://images-na.ssl-images-amazon.com/images/I/31ne12WTaUL._AC_SR400,600_.jpg",
			price: "129.99",
			rating: 2,
		},
		{
			id: 2,
			title: "Fujifilm Instax Mini 11 Instant Camera - Lilac Purple",
			image:
				"https://images-na.ssl-images-amazon.com/images/I/418Fec1b0oL._AC_SR400,600_.jpg",
			price: "19.46",
			rating: 1,
		},
		{
			id: 3,
			title:
				'LG 27MK600M-B 27" Full HD IPS Monitor with Radeon FreeSync Technology and Virtually Borderless Design',
			image:
				"https://images-na.ssl-images-amazon.com/images/I/51ohQnF1XgL._AC_SR400,600_.jpg",
			price: "156.99",
			rating: 3,
		},
		{
			id: 4,
			title:
				"Samsonite Aspire Xlite Softside Expandable Luggage with Spinner Wheels, Black, 2-Piece Set (20/25)",
			image:
				"https://images-na.ssl-images-amazon.com/images/I/41Lborbf3rL._AC_SR400,600_.jpg",
			price: "119",
			rating: 4,
		},
		{
			id: 5,
			title:
				'Sony a7R III Mirrorless Camera: 42.4MP Full Frame High Resolution Interchangeable Lens Digital Camera with Front End LSI Image Processor, 4K HDR Video and 3" LCD Screen - ILCE7RM3/B Body, Black',
			image:
				"https://images-na.ssl-images-amazon.com/images/I/41v77WrFxAL._AC_SR400,600_.jpg",
			price: "2298",
			rating: 4,
		},
		{
			id: 6,
			title: "adidas Entrap Indoor Court Shoe",
			image:
				"https://images-na.ssl-images-amazon.com/images/I/31mZWTrUaDL._AC_SR400,600_.jpg",
			price: "51.90",
			rating: 5,
		},
	];
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="banner"
				/>
				<div className="home__row">
					{products
						.filter((product, idx) => idx < 2)
						.map((product) => (
							<ProductCard key={product.id} product={product}  />
						))}
				</div>
                <div className="home__row">
					{products
						.filter((product, idx) => idx > 1 && idx < 5)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
                <div className="home__row">
					{products
						.filter((product, idx) => idx > 4)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
