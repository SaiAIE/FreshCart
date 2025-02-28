import React, { useEffect } from 'react'
// import "../Freshcart.css"

import Topbar from '../components/Topbar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Navbar from "../components/Navbar.jsx"
import Slides from '../components/Slides.jsx'
import FeaturesProducts from '../components/FeaturesProducts.jsx'
import Groceries from '../components/Groceries.jsx';
import PopularProducts from '../components/PopularProducts.jsx'
import Features from '../components/Features.jsx'
import DailySells from "../components/DailySells.jsx"
import Footer from '../components/Footer.jsx'

const Main = () => {
  useEffect(()=>{
    import("./Product.jsx")
  },[])
  
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
<button className='buy-now text-white position-fixed'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>
    </div>
  )
}

export default Main
