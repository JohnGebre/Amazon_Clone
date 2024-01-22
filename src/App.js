import React, { useEffect } from "react";
import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { auth } from "./components/Firebase/Firebase";
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";


const promise = loadStripe(
  "pk_test_51OPWXeGRT4bgQJHiBQFQr2zvxFZznWK26DVZc9nsAKWWDxDFAyNADK8QGJpjFVV9HF1Hessh4S1APz4CR2dCwdzE00IaXZ3h8t"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}/>
          <Route path="/" element={<><Header /><Home /></>}/>
          <Route path="/checkout" element={<><Header /><CheckOut /></>}/>
          <Route path="/orders" element={<><Header /><Orders /></>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
