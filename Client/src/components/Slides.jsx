import React, { useEffect, useState } from 'react';
import "../styles/Slides.css"
import axios from "axios"

const Slides = () => {
  const [sliderData, setSliderData] = useState([])
  const [loading, setLoading] = useState(true); // State to track loading status
  const api = import.meta.env.VITE_BACKEND

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await axios.get(`${api}/api/slider/`)
        setSliderData(response.data)
        setLoading(false); // Data is loaded, set loading to false
      }
      catch (err) {
        console.log(err.message)
        setLoading(false); // Set loading to false even on error
      }
    }
    fetchSliders()
  }, [])

  return (
    <div className='slider-container position-relative w-100 overflow-hidden'>
      <div className='slider-container__wrapper d-flex'>
        {loading ? (
          [...Array(2)].map((_, index) => (
            <div className='slider-container__slide skeleton-slide w-50 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center' key={index}>
              <img className="slider-container__slide-skeleton-img rounded-4"></img>
              <div className='slider-container__slide-content slider-container__slide-content-skeleton-content position-absolute gap-1 d-flex flex-column align-items-start justify-content-center'>
                <div className='slider-container__tag skeleton-tag rounded-5'></div>
                <div className='slider-container__heading skeleton-heading rounded-3'></div>
                <div className='slider-container__description skeleton-description rounded-2 w-75'></div>
                <div className='slider-container__description skeleton-description rounded-2 w-50'></div>
                <div className='slider-container__button skeleton-button rounded-3'></div>
              </div>
            </div>
          ))
        ) : (
          // Render actual slides once data is fetched
          sliderData.map((slide, index) => (
            <div className='slider-container__slide w-50 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center' key={index}>
              <img src={slide.img} alt="" className='rounded-4'/>
              <div className='slider-container__slide-content position-absolute gap-1 d-flex flex-column align-items-start justify-content-center'>
                <span className='slider-container__tag rounded-5 bg-warning'>{slide.tag}</span>
                <h2 className='slider-container__heading m-0 fw-bold'>{slide.heading}</h2>
                <p className='slider-container__description text-muted mx-1'>{slide.description}</p>
                <button className='slider-container__button text-white border-0 rounded'>
                  {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='slider-container__dots position-absolute d-flex gap-2'>
        {sliderData.map((_, index) => (
          <span
            key={index}
            className='slider-container__dot rounded-circle'
            onClick={() => console.log(`Slide ${index} clicked`)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slides;
