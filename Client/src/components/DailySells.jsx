import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/DailySells.css";

const DailyBestSells = () => {
  const [dailySellsData, setDailySells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchDailySells = async () => {
      try {
        const response = await axios.get(`${api}/api/dailySells/`);
        setDailySells(response.data);
      } catch (err) {
        console.log(err.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDailySells();
  }, []);

  return (
    <div className='daily-best-sells'>
      <h2 className='daily-best-sells__title'>Daily Best Sells</h2>
      <div className='daily-best-sells__list'>
        {loading ? (
          // Skeleton Loader while loading data
          [...Array(4)].map((_, index) => (
            <div className='daily-best-sells__item daily-best-sells__item-skeleton' key={index}>
              <div className='daily-best-sells__item-content'>
                <div className='daily-best-sells__item-img-skeleton'></div>
                <div className='daily-best-sells__item-description-skeleton'>
                  <div className='daily-best-sells__item-title-skeleton'></div>
                  <div className='daily-best-sells__item-desc-skeleton'></div>
                  <div className='daily-best-sells__item-price-rating daily-best-sells__item-price-rating-skeleton'>
                    <div className='daily-best-sells__item-price-rating-rate-skeleton'></div>
                    <div className='daily-best-sells__item-price-rating-rate-skeleton'></div>
                  </div>
                  <div className='daily-best-sells__item-btn-skeleton'></div>
                </div>
              </div>
            </div>
          ))
        ) : dailySellsData.length > 0 ? (
          // Actual content once data is fetched
          dailySellsData.map((item, index) => (
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
          ))
        ) : (
          <div className='w-100 d-flex align-items-center justify-content-center'>
          <div className='fs-5 fw-normal'>No Products Available</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyBestSells;
