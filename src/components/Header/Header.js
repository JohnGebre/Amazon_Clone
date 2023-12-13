import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <div className="header__option">
            <span className="header__optionLineOne">Deliver to </span>
            <span className="header__optionLineTwo">Silver Spring</span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo">Account & Lists</span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
    <div className="header__optionBasket">
    <AddShoppingCartIcon />
    <span className="header__optionLineTwo header__basketCount">0</span>
    </div>
      </div>
    </div>
  );
}

export default Header;
