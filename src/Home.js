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
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />

          <Product 
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />
        </div>

        <div className="home__row">
          <Product 
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />

          <Product 
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />

          <Product 
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />
        </div>

        <div className="home__row">
          <Product 
            id="123456"
            title="The rise and fall of software development uvuwfbwcwywbeyufwyy eyuwuwe wy we wedcugedcguewcguewgu ewcguewgueguewagueguebvewc weguecguwaeguqeqebcguquqaguqe qeguqdcvqegu"
            price={11.85}
            rating={3}
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
