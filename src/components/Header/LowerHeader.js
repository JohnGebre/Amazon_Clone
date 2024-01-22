import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

function LowerHeader() {
  return (
    <div className="lower__container">
      <ul>
        <li>
          <MenuIcon />
          <p>ALL</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Prime</li>
        <li>Music</li>
        <li>Books</li>
        <li>Fashion</li>
        <li>Pharmacy</li>
        <li>Groceries</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
