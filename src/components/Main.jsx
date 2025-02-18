import React from 'react'
// import "../Freshcart.css"

import Topbar from './Topbar.jsx'
import SearchBar from './SearchBar'
import Navbar from "./Navbar.jsx"
import Slides from './Slides.jsx'
import FeaturesProducts from './FeaturesProducts.jsx'
import Groceries from './Groceries';
import PopularProducts from './PopularProducts.jsx'
import Features from './Features.jsx'
import DailySells from "./DailySells.jsx"
import Footer from './Footer.jsx'

const Main = () => {
  return (
    <div className='freshcart'>
        <Topbar/>
        <SearchBar/>
        <Navbar/>
        <Slides/>
        <FeaturesProducts/>
        <Groceries/>
        <PopularProducts/>
        <DailySells/>
        <Features/>
        <Footer/>
        <div className='buynow-container'>
<button className='buy-now'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>
    </div>
  )
}

export default Main
