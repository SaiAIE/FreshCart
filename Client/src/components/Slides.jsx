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
    <div className='slider-container'>
      <div className='slider-container__wrapper'>
        {loading ? (
          [...Array(2)].map((_, index) => (
            <div className='slider-container__slide skeleton-slide' key={index}>
              <img className="slider-container__slide-skeleton-img"></img>
              <div className='slider-container__slide-content slider-container__slide-content-skeleton-content'>
                <div className='slider-container__tag skeleton-tag'></div>
                <div className='slider-container__heading skeleton-heading'></div>
                <div className='slider-container__description skeleton-description'></div>
                <div className='slider-container__button skeleton-button'></div>
              </div>
            </div>
          ))
        ) : (
          // Render actual slides once data is fetched
          sliderData.map((slide, index) => (
            <div className='slider-container__slide' key={index}>
              <img src={slide.img} alt="" />
              <div className='slider-container__slide-content'>
                <span className='slider-container__tag'>{slide.tag}</span>
                <h2 className='slider-container__heading'>{slide.heading}</h2>
                <p className='slider-container__description'>{slide.description}</p>
                <button className='slider-container__button'>
                  {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='slider-container__dots'>
        {sliderData.map((_, index) => (
          <span
            key={index}
            className='slider-container__dot'
            onClick={() => console.log(`Slide ${index} clicked`)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slides;
