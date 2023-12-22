import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function CheckOutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;
