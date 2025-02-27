import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/FeaturedProducts.css";

const FeaturesProducts = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${api}/api/category/`);
        setCategoriesData(response.data);
      } catch (err) {
        console.log(err.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='features-products'>
      <div className='features-products__heading'>
        <h2 className='features-products__title'>Featured Categories</h2>
        <div className='features-products__btns'>
          <button className='features-products__btn features-products__btn--left'>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className='features-products__btn features-products__btn--right'>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Error message displayed outside of the cards container */}
      {error && (
        <div className='error-message w-100 d-flex align-items-center justify-content-center mt-4'>
          <h3 className='text-center fs-5 fw-normal'>Failed to load categories. Please try again later.</h3>
        </div>
      )}

      <div className='features-products__cards'>
        {loading ? (
          // Skeleton loader while data is being fetched
          [...Array(15)].map((_, index) => (
            <div className='features-products__card features-products__card-skeleton' key={index}>
              <div className='features-products__card-img features-products__card-img-skeleton'></div>
              <div className='features-products__card-title features-products__card-title-skeleton'></div>
            </div>
          ))
        ) : (
          // Actual content when data is available
          categoriesData.map((category, index) => (
            <div className='features-products__card' key={index}>
              <img src={category.img} alt={category.title} className='features-products__card-img' />
              <p className='features-products__card-title'>{category.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturesProducts;
