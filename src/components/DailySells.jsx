import React from 'react';
import { dailySellsData } from '../assets/data';
import "../styles/DailySells.css";

const DailyBestSells = () => {
  return (
    <div className='daily-best-sells'>
      <h2 className='daily-best-sells__title'>Daily Best Sells</h2>
      <div className='daily-best-sells__list'>
        {dailySellsData.map((item, index) => (
          <div key={index} className={`daily-best-sells__item daily-best-sells__item--${index === 0 ? '1' : '2'}`}>
            {index === 0 ? (
              <div className='daily-best-sells__item-content'>
                <img src={item.img} alt={item.title} className='daily-best-sells__item-img-1' />
                <div className='daily-best-sells__item-description'>
                  <h3 className='daily-best-sells__item-title'>{item.title}</h3>
                  <p className='daily-best-sells__item-desc'>{item.description}</p>
                  <button className='daily-best-sells__item-btn'>
                    {item.buttonText} <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className='daily-best-sells__item-img-container'>
                  <img src={item.img} alt={item.title} className='daily-best-sells__item-img' />
                </div>
                <div className='daily-best-sells_item-content'>

                {item.category && <p className='daily-best-sells__item-category'>{item.category}</p>}
                <h3 className='daily-best-sells__item-title daily-best-sells__item-title-2'>{item.title}</h3>
                {item.price && (
                  <div className='daily-best-sells__item-price-rating'>
                    <h3 className='daily-best-sells__item-price'>
                      {item.price} <span className='daily-best-sells__item-original-price'>{item.originalPrice}</span>
                    </h3>
                    <span className='daily-best-sells__item-rating'>★★★★★<span>{item.rating}</span></span>
                  </div>
                )}
                </div>
                <button className='daily-best-sells__item-btn'>{item.buttonText}</button>
                {item.timer && (
                  <div className='daily-best-sells__item-timer'>
                    <div className='daily-best-sells__item-timer-unit'>
                      {item.timer.days} <br /><span>Days</span>
                    </div>
                    <div className='daily-best-sells__item-timer-unit'>
                      {item.timer.hours} <br /><span>Hours</span>
                    </div>
                    <div className='daily-best-sells__item-timer-unit'>
                      {item.timer.mins} <br /><span>Mins</span>
                    </div>
                    <div className='daily-best-sells__item-timer-unit'>
                      {item.timer.secs} <br /><span>Secs</span>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className='daily-best-sells__item-options'>
              <i className="fa-regular fa-eye daily-best-sells__item-option"></i>
              <i className="fa-regular fa-heart daily-best-sells__item-option"></i>
              <i className="fa-solid fa-arrow-right-arrow-left daily-best-sells__item-option"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyBestSells;


// import React from 'react';
// import { dailySellsData } from '../assets/data'; // Adjust import path if needed
// import "../styles/DailySells.css"
// const DailyBestSells = () => {
//   return (
//     <div className='daily-main'>
//       <h2>Daily Best Sells</h2>
//       <div className='DailySells'>
//         {dailySellsData.map((item, index) => (
//           <div key={index} className={`daily${index === 0 ? 1 : 2}`}>
//             {/* First item will use the dailycontent class */}
//             {index === 0 ? (
//               <div className='daily1'>
//               <img src={item.img} alt="" />
//               <div className='dailycontent'>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//                 <button>{item.buttonText} <i className="fa-solid fa-arrow-right"></i></button>
//               </div>
//               </div>
//             ) : (
//               <>
//                 <div className={`daily${index === 0 ? 1 : 2}-img`}>
//                   <img src={item.img} alt="" />
//                 </div>
//                 {item.category && <p>{item.category}</p>}
//                 <h3>{item.title}</h3>
//                 {item.price && (
//                   <div className='price-rating'>
//                     <h3>{item.price} <span>{item.originalPrice}</span></h3>
//                     <span className='rating'>★★★★★<span>{item.rating}</span></span>
//                   </div>
//                 )}
//                 <button className='addtocart'>{item.buttonText}</button>
//                 {item.timer && (
//                   <div className='time'>
//                     <div>{item.timer.days} <br /><span>Days</span></div>
//                     <div>{item.timer.hours} <br /><span>Hours</span></div>
//                     <div>{item.timer.mins} <br /><span>Mins</span></div>
//                     <div>{item.timer.secs} <br /><span>Secs</span></div>
//                   </div>
//                 )}
//               </>
//             )}
//             <div className='dailyoptions'>
//               <i className="fa-regular fa-eye"></i>
//               <i className="fa-regular fa-heart"></i>
//               <i className="fa-solid fa-arrow-right-arrow-left"></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DailyBestSells;
