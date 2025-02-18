import React from 'react';
import { categoriesData } from '../assets/data';
import "../styles/FeaturedProducts.css"

const FeaturesProducts = () => {
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
      <div className='features-products__cards'>
        {categoriesData.map((category, index) => (
          <div className='features-products__card' key={index}>
            <img src={category.img} alt={category.title} className='features-products__card-img' />
            <p className='features-products__card-title'>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;



// import React from 'react'
// import { categoriesData } from '../assets/data'
// import FeaturesProducts from './FeaturesProducts';

// const FeaturesProducts = () => {
//   return (
//     <div className='slider-cards'>
//     <div className='slider-heading'>
//       <h2>Featured Categories</h2>
//       <div className='slider-btns'>
//         <button><i className="fa-solid fa-chevron-left"></i></button>
//         <button><i className="fa-solid fa-chevron-right"></i></button>
//       </div>
//     </div>
//     <div className='cards1'>
//       {categoriesData.map((category, index) => (
//         <div className='card' key={index}>
//           <img src={category.img} alt="" />
//           <p>{category.title}</p>
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }

// export default FeaturesProducts