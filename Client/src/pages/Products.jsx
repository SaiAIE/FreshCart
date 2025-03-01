import React,{useEffect} from 'react'
import Topbar from '../components/Topbar'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Products1 from '../components/Products'
import Footer from '../components/Footer'

const Products = () => {
    useEffect(()=>{
        import("./Product.jsx")
        import("./Main.jsx")
      },[])
  return (
    <div>
      <Topbar/>
      <SearchBar/>
      <Navbar/>
      <Products1/>
      <Footer/>
      <div className='buynow-container'>
<button className='buy-now text-white position-fixed'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>
    </div>
  )
}

export default Products
