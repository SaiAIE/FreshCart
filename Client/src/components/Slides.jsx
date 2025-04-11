import React, { useEffect, useState } from 'react';
import { getSliders } from '../api/api.service';
import "../styles/Slides.css"

const Slides = () => {
  const [sliderData, setSliderData] = useState([])
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0)
  const slideInterval = 3000

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await getSliders()
        setSliderData(response.data)
        setLoading(false);
      }
      catch (err) {
        console.log(err.message)
        setLoading(false);
      }
    }
    fetchSliders()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
    }, slideInterval);
    return () => clearInterval(interval)
  }, [sliderData.length])

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='slider-container position-relative w-100 overflow-hidden'>
      <div className='slider-container__wrapper d-flex' style={{ width: loading ? "200%" : `${sliderData.length * 100}%`, transform: `translateX(-${activeIndex * (100 / sliderData.length)}%)`, transition: "transform 0.5s ease-in-out" }}>
        {loading ? (
          [...Array(2)].map((_, index) => (
            <div data-testid="loading-skelton" className='slider-container__slide skeleton-slide w-50 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center' key={index}>
              <div className="slider-container__slide-skeleton-img rounded-4"></div>
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
          sliderData.map((slide, index) => (
            <div className='slider-container__slide w-50 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center' key={index}>
              <picture className='d-flex align-items-center justify-content-center'>
                <source srcSet={slide.img.replace(/\.(jpeg|png)$/, '.avif')} type="image/avif" />
                <source srcSet={slide.img.replace(/\.(jpeg|png)$/, '.webp')} type="image/webp" />
                <img
                  data-testid="slide-img"
                  src={slide.img}
                  alt={slide.alt || 'Slide Image'}
                  className='rounded-4'
                  loading="eager"
                  fetchPriority='high'
                />
              </picture>
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
      {!loading && sliderData.length > 1 && (
        <div className='slider-container__dots position-absolute d-flex gap-2'>
          {sliderData.map((_, index) => (
            <span
              key={index}
              className={'slider-container__dot rounded-circle ${index === activeIndex ? "active-dot":""} '}
              data-testid="slider-dot"
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slides;
