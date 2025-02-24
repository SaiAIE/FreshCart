import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import { useCart } from '../contexts/CartContext';
import "../styles/PopularProducts.css";

const PopularProducts = () => {
    const [products,setProducts] = useState([])
    const {addToCart} = useCart()

    const api = import.meta.env.VITE_BACKEND
  
    useEffect(()=>{
      const fetchProducts = async()=>{
        try{
          const response = await axios.get(`${api}/api/product/`)
          setProducts(response.data)
        }
        catch(err){
          console.log(err.message)
        }
      }
      fetchProducts()
    },[])

  return (
    <div className='popular-products'>
      <h2 className='popular-products__title'>Popular Products</h2>
      <div className='popular-products__list'>
        {products.map((product, index) => (
          <Link to={`/product/${product._id}`} className='popular-products__item' key={product._id}>
            <div className='popular-products__item-offers'>
              {product.offer && <span className='popular-products__offer'>{product.offer}</span>}
              {product.offerValue && <span className='popular-products__offer-value'>{product.offerValue}</span>}
            </div>
            <img src={product.image[0]} alt={product.name} className='popular-products__item-img' />
            <div className='popular-products__item-content'>
              <p className='popular-products__item-category'>{product.category}</p>
              <h3 className='popular-products__item-name'>{product.name}</h3>
              <p className='popular-products__item-rating'>
                {product.rating}<span>4.3(4)</span>
              </p>
              <div className='popular-products__item-price-cart'>
                <h3 className='popular-products__item-price'>{product.price} <span className='popular-products__item-original-price'>{product.originalPrice}</span></h3>
                <button className='popular-products__item-btn' onClick={(e)=>{e.stopPropagation();e.preventDefault();addToCart(product)}}>+ Add</button>
              </div>
            </div>
            <div className='popular-products__item-options'>
              <i className="fa-regular fa-eye popular-products__item-option"></i>
              <i className="fa-regular fa-heart popular-products__item-option"></i>
              <i className="fa-solid fa-arrow-right-arrow-left popular-products__item-option"></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;


// import React from 'react';
// import { products } from '../assets/data';
// import "../styles/PopularProducts.css"

// const PopularProducts = () => {
//   return (
//     <div className='popularproducts'>
//       <h2>Popular Products</h2>
//       <div className='products'>
//         {products.map((product, index) => (
//           <div className='product' key={index}>
//             <div className='product-offers'>
//               {product.offer && <span className='span1'>{product.offer}</span>}
//               {product.offerValue && <span className='span2'>{product.offerValue}</span>}
//             </div>
//             <img src={product.image} alt={product.name} />
//             <div className='product-content'>
//               <p className='product-category'>{product.category}</p>
//               <h3>{product.name}</h3>
//               <p className='product-rating'>{product.rating}<span>4.3(4)</span></p>
//               <div className='price-cart'>
//                 <h3>{product.price} <span>{product.originalPrice}</span></h3>
//                 <button>+ Add</button>
//               </div>
//             </div>
//             <div className='productoptions'>
//               <i className="fa-regular fa-eye"></i>
//               <i className="fa-regular fa-heart"></i>
//               <i className="fa-solid fa-arrow-right-arrow-left"></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PopularProducts;
