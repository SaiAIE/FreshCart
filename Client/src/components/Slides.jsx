// src/components/Slider.js
import React, { useEffect, useState } from 'react';
import "../styles/Slides.css"
import axios from "axios"

const Slides = () => {
  const [sliderData,setSliderData] = useState([])
  const api = import.meta.env.VITE_BACKEND

  useEffect(()=>{
    const fetchSliders = async()=>{
      try{
        const response = await axios.get(`${api}/api/slider/`)
        setSliderData(response.data)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchSliders()
  },[])

  return (
    <div className='slider-container'>
      <div className='slider-container__wrapper'>
        {sliderData.map((slide, index) => (
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
        ))}
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


// import React from 'react';
// import { sliderData } from '../assets/data';

// const Slides = () => {
//   return (
//     <div className='slider-container'>
//       <div className='slider-wrapper'>
//         {sliderData.map((slide, index) => (
//           <div className='slide' key={index}>
//             <img src={slide.img} alt="" />
//             <div className='slide-content'>
//               <span className='tag'>{slide.tag}</span>
//               <h2>{slide.heading}</h2>
//               <p>{slide.description}</p>
//               <button>{slide.buttonText} <i className="fa-solid fa-arrow-right"></i></button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='slider-dots'>
//         {sliderData.map((_, index) => (
//           <span key={index} className='dot' onClick={() => console.log(Slide ${index} clicked)}></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slides;
