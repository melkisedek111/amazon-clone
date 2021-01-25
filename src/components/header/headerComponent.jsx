import React from "react";
import "./header.style.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../provider/StateProvider";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../reducer/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utls";
import { selectCurrentUser } from "../../reducer/user/userSelector";
const Header = ({cartItemsCount, currentUser}) => {
	// const [{ basket }, dipatch] = useStateValue();
	return (
		<div className="header">
			
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="logo"
					className="header__logo"
				/>
			</Link>

			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				{
					currentUser ? (
						<div className="header__option" >
							<span className="header__optionLineOne">Hello {currentUser ? currentUser.email : 'Guest'}</span>
							<span className="header__optionLineTwo" onClick={() => auth.signOut()}>Sign Out</span>
						</div>
					) : (
						<Link to="/login"> 
							<div className="header__option">
								<span className="header__optionLineOne">Hello Guest</span>
								<span className="header__optionLineTwo">Sign In</span>
							</div>
						</Link>
					)
				}
				
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
			</div>
			<Link to="/checkout">
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header__basketCount">
						{cartItemsCount}
					</span>
				</div>
			</Link>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItemsCount: selectCartItemsCount,
	currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
