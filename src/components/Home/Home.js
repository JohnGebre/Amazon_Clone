import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j2ErIwmQL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Original Peloton Bike | Indoor Stationary Exercise Bike with Immersive 22 HD Touchscreen (Updated Seat Post)"
            price={1240.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/41YOzjtQxtL._AC_SY164_.jpg"
          />
          {/* <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          /> */}
          <Product
            id="49538094"
            title="Hamilton Beach 35032 Professional Style Electric Deep Fryer, Frying Basket with Hooks, 1500 Watts, 3 Liters, Stainless Steel"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/41QmphaNreL._AC_SY164_.jpg"
          />
          <Product
            id="49538094"
            title="Nespresso VertuoPlus Coffee and Espresso Machine by Breville,60 fluid ounces, Ink Black"
            price={139.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/4177C9IR-7L._AC_SY164_.jpg"
          />
          <Product
            id="49538094"
            title="KJBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Black"
            price={64.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/417pumnhthL._AC_SY164_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;