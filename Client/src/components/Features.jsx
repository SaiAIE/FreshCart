import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/Features.css";

const Features = () => {
  const [featuresData, setFeaturesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(`${api}/api/features/`);
        setFeaturesData(response.data);
      } catch (err) {
        console.log(err.message);
        setError("Error Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchFeatures();
  }, []);

  return (
    <div className='features'>
      {loading ? (
        <div className='features_lists-skeleton'>
        {[...Array(4)].map((_, index) => (
          <div key={index} className='features__item features__item-skeleton'>
            <div className='features__item-icon features__item-icon-skeleton'></div>
            <div className='features__item-title features__item-title-skeleton'></div>
            <div className='features__item-description features__item-description-skeleton'></div>
          </div>
        ))}</div>
      ) : error ? (
        // Error message displayed if fetching fails
        <div className='d-flex w-100 align-item-center justify-content-center'>
        <h2 className='fs-5 fw-normal text-center'>{error}</h2>
        </div>
      ) : (
        // Actual content displayed once data is fetched
        featuresData.map((feature, index) => (
          <div key={index} className='features__item'>
            <i className={`fa-solid ${feature.icon} features__item-icon`}></i>
            <h3 className='features__item-title'>{feature.title}</h3>
            <p className='features__item-description'>{feature.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Features;
