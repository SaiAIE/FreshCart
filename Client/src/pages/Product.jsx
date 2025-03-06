import React,{useEffect} from 'react'
import Footer from '../components/Footer.jsx'
import ProductDetail from '../components2/ProductDetails.jsx'

const Product = () => {
    useEffect(()=>{
      import("./Main.jsx")
      import("./Products.jsx")
    },[])
  return (
    <div className='freshcart'>
        <ProductDetail/>
        <Footer/> 
        <div className='buynow-container'>
<button className='buy-now text-white position-fixed'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>     
    </div>
  )
}

export default Product
