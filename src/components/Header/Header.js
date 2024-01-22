import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../Firebase/Firebase";
import LowerHeader from "./LowerHeader";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <section>
        <div className="header">
          <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </Link>
          <div className="header__delivery">
            <span>
              <LocationOnIcon />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Silver Spring , MD</span>
            </div>
          </div>

          <div className="header__search">
            <input className="header__searchInput" type="text" placeholder="Search Amazon" />
            <SearchIcon className="header__searchIcon" />
          </div>

          <div className="header__nav">
            <a href="" className="language">
              <img
                src="https://cdn1.iconfinder.com/data/icons/us-state-flags-rounded-rectangles/900/united_states_america_flag_american_usa_us-512.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
                <option value="">ES</option>
              </select>
            </a>

            <Link to={!user && "/login"} className="header__clearlink">
              <div onClick={handleAuthenticaton} className="header__option">
                <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
              </div>
            </Link>

            <Link to="/orders" className="header__clearlink">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>

            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout" className="header__clearlink">
              <div className="header__optionBasket">
                <AddShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
//
