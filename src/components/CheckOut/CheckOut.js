import React from "react";
import "./CheckOut.css";
import SubTotal from "./SubTotal/SubTotal";
import CheckOutProduct from "./CheckOutProduct/CheckOutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/GiftCards/GCLP/D_Hero_eGC._SX3000_QL85_.jpg"
          alt=""
        />
        <h3>Hello {user?.email} </h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
     
        {basket.map((product, index) => (
          <CheckOutProduct
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
