import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-home"
        />
        <div className="home__row">
          <Product 
            id="1234"
            title="The lean startup"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product 
            id="4529"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.9}
            rating={3}
            image="https://i.ebayimg.com/images/g/ZXAAAOSw-19fB~El/s-l400.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
            id="2907"
            title="Samsung LC48849090663085 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product 
            id="5781"
            title="Amazon ECHO (3rd generation) SMart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images.yaoota.com/GcS37teD0QypzfDlqhDXG0vY160=/trim/yaootaweb-production-ng/media/crawledproductimages/319bf551e139187686a8736e0ac46fc79e935fe0.jpg"
          />

          <Product 
            id="9120"
            title="New Apple iPad Pro (12.9-inch, wifi, 128GB) - SIlver (4th Generation)"
            price={589.99}
            rating={3}
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/166397/1.jpg?9386"
          />
        </div>

        <div className="home__row">
          <Product 
            id="7567"
            title="Samsung LC49305868948942602 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5128 x 1448"
            price={104.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
