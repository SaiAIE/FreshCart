import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import { useCart } from '../contexts/CartContext';
import "../styles/PopularProducts.css";

const PopularProducts = () => {
    const [products,setProducts] = useState([])
    const {addToCart} = useCart()
    const [filteredProducts, setFileteredProducts] = useState([])
    const [originalOrder,setOriginalOrder] = useState([])
    const [selectFilters,setSelectedFilters] = useState({
      category:"",
      priceRange:"",
      rating:"",
      sortOrder:""
    })
    const [dropdowns, setDropdowns] = useState({})

    const api = import.meta.env.VITE_BACKEND
  
    useEffect(()=>{
      const fetchProducts = async()=>{
        try{
          const response = await axios.get(`${api}/api/product/`)
          const updatedProducts = response.data.map(product => ({
            ...product,
            price: parseFloat(product.price.replace("$",""))
          }))
          setProducts(updatedProducts)
          setFileteredProducts(updatedProducts)
          setOriginalOrder(updatedProducts)
        }
        catch(err){
          console.log(err.message)
        }
      }
      fetchProducts()
    },[])

    const handleResetFilters =()=>{
      setSelectedFilters({
        category:"",
        priceRange:"",
        rating:"",
        sortOrder:"",
      })
      setFileteredProducts(products)
    }

    const toggleDropdown = (key)=>{
      setDropdowns(prev => ({...prev, [key]: !prev[key]}))
    }

    const handleFilterChange = (key,value)=>{
      setSelectedFilters(prev =>{
        const newFilters = {...prev, [key]: key === "rating" ? Number(value) : value}
        applyFilters(newFilters)
        return newFilters
      })
      setDropdowns(prev => ({...prev, [key]: false}))
    }

    const applyFilters = (filters)=>{
      let updatedList = [...products]
      if(filters.category){
        updatedList = updatedList.filter(product => product.category === selectFilters.category)
      }
      if(filters.priceRange){
        const [min,max]=selectFilters.priceRange.split('-').map(Number)
        updatedList = updatedList.filter(product => product.price >= min && product.price <= max)
      }
      if(filters.rating){
        const minRating = Number(filters.rating)
        updatedList = updatedList.filter(product=>
        {
          const ratingCount = product.rating.length;
          return ratingCount >=minRating
        })
      }

      if(filters.sortOrder){
        if(filters.sortOrder === "popular"){
          updatedList = [...originalOrder]
        }else{
          updatedList.sort((a,b)=> filters.sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price)
        }
      }
      setFileteredProducts(updatedList)
    }

    useEffect(()=> {
      applyFilters(selectFilters)
    },[selectFilters,products])

    const handleSort = (order)=>{
      setSelectedFilters(prev => ({...prev, sortOrder:order}))
      setDropdowns(prev => ({...prev, sort:false}))

      if(order === "popular"){
        setFileteredProducts(originalOrder)
      }
      else{
        const sortedList = [...filteredProducts].sort((a,b)=>{
          return order === "low-to-high" ? a.price - b.price : b.price - a.price
        })
        setFileteredProducts(sortedList)
      }
    }

  return (
    <div className='popular-products'>
      <h2 className='popular-products__title'>Popular Products</h2>
      <div  className='popular-products__controls mt-3'>
        <div className='dropdown' onClick={()=> toggleDropdown('category')}>
          <span className='dropdown-heading'>Category <i class="fa-solid fa-angle-down"></i></span>
          {dropdowns.category && (
            <div className='dropdown-menu'>
              {['Snack & Munchies', "Bakery & Biscuits","Instant Food","Dairy, Bread & Eggs"].map(category => (
                <div key={category} onClick={()=> handleFilterChange("category",category)}>{category}</div>
              ))}
            </div>
          )}
        </div>

        <div className='dropdown' onClick={()=> toggleDropdown("priceRange")}>
          <span className='dropdown-heading'>Price <i class="fa-solid fa-angle-down"></i></span>
          {dropdowns.priceRange && (
            <div className='dropdown-menu'>
              {["0-20","20-50","50-100"].map(range => (
                <div key={range} onClick={()=> handleFilterChange("priceRange",range)}>${range.replace("-"," - $")}</div>
              ))}
            </div>
          )}
        </div>

        <div className='dropdown' onClick={()=> toggleDropdown('rating')}>
          <span className='dropdown-heading'>Rating <i class="fa-solid fa-angle-down"></i></span>
          {dropdowns.rating && (
            <div className='dropdown-menu'>
              {[4,3].map(rating => (
                <div key= {rating} onClick={()=> handleFilterChange("rating",rating)}>{rating}⭐ & above</div>
              ))}
            </div>
          )}
        </div>
        <div className='dropdown' onClick={()=> toggleDropdown("sort")}>
          <span className='dropdown-heading'>Sort <i class="fa-solid fa-angle-down"></i></span>
          {dropdowns.sort && (
            <div className='dropdown-menu'>
              <div onClick={()=> handleSort("popular")}>Popular <i class="fa-solid fa-star-half-stroke"></i></div>
              <div onClick={()=> handleSort("low-to-high")}>Low To High <i class="fa-solid fa-arrow-down-wide-short"></i></div>
              <div onClick={()=> handleSort("high-to-low")}>High To Low <i class="fa-solid fa-arrow-up-wide-short"></i></div>
            </div>
          )}
        </div>
        <button onClick={handleResetFilters} className='btn bg-success text-white fs-6 fw-bold m-0 py-1 px-2'><i class="fa-solid fa-rotate-right"></i></button>
      </div>
      <div className='popular-products__list'>
        {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
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
                <h3 className='popular-products__item-price'>${product.price} <span className='popular-products__item-original-price'>{product.originalPrice}</span></h3>
                <button className='popular-products__item-btn' onClick={(e)=>{e.stopPropagation();e.preventDefault();addToCart(product)}}>+ Add</button>
              </div>
            </div>
            <div className='popular-products__item-options'>
              <i className="fa-regular fa-eye popular-products__item-option"></i>
              <i className="fa-regular fa-heart popular-products__item-option"></i>
              <i className="fa-solid fa-arrow-right-arrow-left popular-products__item-option"></i>
            </div>
          </Link>
        ))
      ):(
        <div className='no-products d-flex align-items-center flex-column justify-content-between'>
        <p className='fs-5 fw-bold'>No Products Available !!!</p>
        <button className='btn bg-success text-white fs-6 fw-bold' onClick={handleResetFilters}>Reset Filter <i class="fa-solid fa-rotate-right"></i></button>
        </div>
      )}
      </div>
    </div>
  );
};

export default PopularProducts;