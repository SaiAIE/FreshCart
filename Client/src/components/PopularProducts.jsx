import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import { useCart } from '../contexts/CartContext';
import "../styles/PopularProducts.css";

const PopularProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()
  const [visibleProducts, setVisibleProducts] = useState(10);

  console.log(products)

  const api = import.meta.env.VITE_BACKEND

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleProducts(8);
      } else {
        setVisibleProducts(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api}/api/product/`)
        const updatedProducts = response.data.map(product => ({
          ...product,
          price: parseFloat(product.price.replace("$", ""))
        }))
        setProducts(updatedProducts)
      }
      catch (err) {
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className='popular-products'>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className='popular-products__title'>Popular Products</h2>
        <Link to={`/products`} className='btn btn-success fw-bold'>More <i class="fa-solid fa-arrow-right-long"></i></Link>
      </div>
      <div className='popular-products__list'>
        {loading ? (
          [...Array(10)].map((_, index) => (
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
        ) : products.length > 0 ? (
          products.slice(0, visibleProducts).map((product, index) => (
            <Link to={`/product/${product._id}`} className='popular-products__item d-flex flex-column position-relative rounded-2 h-auto text-black text-decoration-none w-100' key={product._id}>
              <div className='popular-products__item-offers d-flex flex-column align-items-start justify-content-between position-absolute'>
                {product.offer && <span className='popular-products__offer text-white fw-bold'>{product.offer}</span>}
                {product.offerValue && <span className='popular-products__offer-value text-white fw-bold'>{product.offerValue}</span>}
              </div>
              <img src={product.image[0]} alt={product.name} className='popular-products__item-img' />
              <div className='popular-products__item-content d-flex flex-column align-items-start justify-content-between'>
                <p className='popular-products__item-category text-secondary'>{product.category}</p>
                <h3 className='popular-products__item-name'>{product.name}</h3>
                <p className='popular-products__item-rating text-warning d-flex align-items-center justify-content-center'>
                  {product.rating}<span className='text-secondary'>4.3(4)</span>
                </p>
                <div className='popular-products__item-price-cart d-flex w-100 align-items-center justify-content-between'>
                  <h3 className='popular-products__item-price'>${product.price} <span className='popular-products__item-original-price text-secondary fw-semibold text-decoration-line-through'>{product.originalPrice}</span></h3>
                  <button className='popular-products__item-btn text-white border-0 rounded fw-semibold ' onClick={(e) => { e.stopPropagation(); e.preventDefault(); addToCart(product) }}>+ Add</button>
                </div>
              </div>
              <div className='popular-products__item-options position-absolute flex-row align-items-center justify-content-between gap-2'>
                <i className="fa-regular fa-eye popular-products__item-option rounded"></i>
                <i className="fa-regular fa-heart popular-products__item-option rounded"></i>
                <i className="fa-solid fa-arrow-right-arrow-left popular-products__item-option rounded"></i>
              </div>
            </Link>
          ))
        ) : (
          <div className='no-products d-flex align-items-center flex-column justify-content-between'>
            <p className='fs-5 fw-normal'>No Products Available !!!</p>
            <button className='btn bg-success text-white fs-6 fw-normal ' onClick={handleResetFilters}>Reset Filter <i class="fa-solid fa-rotate-right"></i></button>
          </div>
        )}

        <div className="popular-products__overlay d-flex justify-content-center align-items-center w-100 position-absolute">
          <Link to={'/products'} className='btn fs-5 fw-semibold rounded w-100 h-100 more__products-btn w-100 h-100 text-align-center d-flex align-items-center justify-content-center text-black text-decoration-underline'>View More Products <i class="fa-solid fa-arrow-right-long"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;