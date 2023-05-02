// import React from 'react'
import './HomePage.css'

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Menus from './Components/Menus/Menus';
import FoodMonth from './Components/FoodMonth/FoodMonth';
import PopularCustomers from './Components/PopularCustomers/PopularCustomers';
import PartSuccess from './Components/PartSuccess/PartSuccess';

export default function Homepage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Menus />
      </main>
      <section>
        <PartSuccess />
        <FoodMonth />
        <PopularCustomers />
      </section>
      <Footer />
    </div>
  )
}
