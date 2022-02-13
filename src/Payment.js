import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const promise = loadStripe (
  "pk_test_51KSUz2EPfhZKWKh8rkepz96OE7pa9iV2Emuf8PLYnIwDxZY8hKpSN8sJUUosBudbclLz1wX5OhpljWFrid8thE5t008MoKMxGT"
);

const Payment = () => {

  // const elements = useElements();
  // const stripe = useStripe();

  const [{basket, user}, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {

  }

  const handleChange = (e) => {
    
  }
  
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <div className="payment">
          <div className="payment__container">
            <h1>
              Checkout {<Link to="/checkout">({basket?.length} items)</Link>}
            </h1>
            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                <p>{user?.email}</p>
                <p>Plot 3b Omolayo Crescent,</p>
                <p>Surulere, Lagos.</p>
              </div>
            </div>

            <div className="payment__section">
              <div className="payment__title">
                <h3>Review items and deivery</h3>
              </div>
              <div className="payment__items">
                {basket.map(item => (
                  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>

            <div className="payment__section">
              <div className="payment__title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                {/* strip magic happens here */}
                <form onSubmit={ handleSubmit }>
                  <CardElement onChange={ handleChange }/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Elements>
    </>
  ); //stopped at 5hr 56min
};

export default Payment;
