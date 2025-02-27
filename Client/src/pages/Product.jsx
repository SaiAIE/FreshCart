import React,{useEffect} from 'react'
import Topbar from '../components/Topbar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import ProductDetail from '../components2/ProductDetails.jsx'

const Product = () => {
    useEffect(()=>{
      import("./Main.jsx")
    },[])
  return (
    <div className='freshcart'>
        <Topbar/>
        <SearchBar/>
        <Navbar/>
        <ProductDetail/>
        <Footer/> 
        <div className='buynow-container'>
<button className='buy-now'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>     
    </div>
  )
}

export default Product
