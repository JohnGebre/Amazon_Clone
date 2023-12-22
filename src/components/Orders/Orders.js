import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import Order from "../Order/Order";
import "../Orders/Orders.css";
import { useStateValue } from "../StateProvider/StateProvider";
const Orders = () => {
  const [{ basket, user }, disPatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, index) => (
          <div key={index}>
            <Order order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
