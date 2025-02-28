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
    <div className='features-products d-flex flex-column overflow-hidden p-2 justify-content-between'>
      <div className='features-products__heading d-flex flex-row align-items-center justify-content-between'>
        <h2 className='features-products__title fw-semibold text-dark my-2 fs-4'>Featured Categories</h2>
        <div className='features-products__btns gap-2 d-flex'>
          <button className='features-products__btn rounded-circle border-0 fs-5 fw-semibold bg-muted'>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className='features-products__btn rounded-circle border-0 fs-5 fw-semibold bg-muted'>
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

      <div className='features-products__cards d-flex my-4 flex-wrap'>
        {loading ? (
          // Skeleton loader while data is being fetched
          [...Array(12)].map((_, index) => (
            <div className='features-products__card features-products__card-skeleton d-flex flex-column align-items-center justify-content-evenly p-4 gap-2 fs-6 fw-normal text-muted text-center rounded bg-white d-flex flex-column align-items-center justify-content-between' key={index}>
              <div className='features-products__card-img features-products__card-img-skeleton rounded'></div>
              <div className='features-products__card-title features-products__card-title-skeleton rounded'></div>
            </div>
          ))
        ) : (
          // Actual content when data is available
          categoriesData.map((category, index) => (
            <div className='features-products__card d-flex flex-column align-items-center justify-content-evenly p-4 gap-2 fs-6 fw-normal text-muted text-center rounded' key={index}>
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
