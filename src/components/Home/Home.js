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
            title="Ethiopian Original Shirt | Ethiopia Flag Shirt | Ethiopian T-Shirt"
            price={22.35}
            rating={5}
            image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81XFfNFTOEL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png"
          />
          <Product
            id="49538094"
            title="iOttie Easy One Touch Dashboard Car Mount Phone Holder iPhone, Samsung, Google and Smartphones"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/61XzOG9rAwL._AC_SX679_.jpg"
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
            title="Ethiopian Flag Lion Map Pendant Necklace For Women Men Jewelry Map Chain"
            price={13.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/61mJUWHzq2L._AC_SY500_.jpg"
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
            title="LG 45GR65DC-B 45' Ultragear™ QHD 1ms 200Hz Curved Gaming Monitor with VESA DisplayHDR™ 600 (DisplayPort,HDMI), Black"
            price={240.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UAhke5vxL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Silonn Nugget Ice Maker Countertop, One-Click Operation Ice Machine with Self-Cleaning, Kitchen, Office"
            price={179.45}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Mp3Xt65KL._SX466_.jpg"
          />
          <Product
            id="23445930"
            title="AYEANY Lunch box Lunch bag for men women Lunch bags Insulated Lunch bag Lunch box cooler (Black)"
            price={38.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71961Si2zfL._AC_SX425_.jpg"
          />
          <Product
            id="3254354345"
            title="Mini Portable Washing Machine Foldable:Small Collapsible Laundry Washer for Travel, Apartment, Underwears, Socks, Baby Clothes (Green)"
            price={69.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71dfXUGu07L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Deco Gear 49' Curved Ultrawide  Gaming Monitor, Immersive 3840x1080 Resolution, 144Hz Refresh Rate, 3000:1 Contrast Ratio"
            price={369.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71LDbprgVEL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="ASUS Vivobook 16X 16 FHD Business Laptop, AMD Ryzen 7 5800H, 16GB RAM, 512GB PCIe SSD, AMD Radeon Graphics, HD Camera, Bluetooth, Blue, Win 11 "
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/813013ur94L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Samsung Galaxy Z Flip 3 5G T-Mobile Locked Android Cell Phone Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty(Lavender)"
            price={498.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61pyKxTlLpL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Handheld Sewing Machine with USB Cable Fast Stitch Portable Sewing Machine for Beginners Mini Electric Sewing Machine for DIY Home Travel"
            price={27.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Logrrj++L._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Packard Bell 21 Inch Monitor FHD 1920 x 1080 , Dual Monitor, Ultrawide Monitor, Basic & Gaming Monitor – 2 Pack"
            price={245.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/817zwrMy+XL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
