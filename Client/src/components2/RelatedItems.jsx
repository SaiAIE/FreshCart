import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext';
import "../styles2/RelatedItems.css"

const RelatedItems = () => {
    const {addToCart} = useCart()
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const api = import.meta.env.VITE_BACKEND
  
    useEffect(()=>{
      const fetchProducts = async()=>{
        try{
          const response = await axios.get(`${api}/api/product/`)
          setProducts(response.data)
          setLoading(false)
        }
        catch(err){
          console.log(err.message)
          setLoading(false)
        }
      }
      fetchProducts()
    },[])
  return (
    <div className='popular-products w-100 p-0'>
      <h2 className='popular-products__title'>Related Items</h2>
      <div className='popular-products__list'>
        {loading ? (
          [...Array(5)].map((_,index)=>(
            <div className='popular-products__item skeleton' key={index}>
              <div className='skeleton-img placeholder w-100'></div>
              <div className='skeleton-content mt-3 mb-3'>
                <div className='placeholder w-50 mb-2'></div>
                <div className='placeholder w-100 mb-2'></div>
                <div className='placeholder w-75'></div>
              </div>
              <div className='skeleton-pricecart'>
                <div className='placeholder w-50 mb-2'></div>
                <div className='placeholder w-25'></div>
              </div>
            </div>
          ))
        ):(products.slice(0, 5).map((product, index) => (
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
        )))}
      </div>
    </div>
  )
}

export default RelatedItems
