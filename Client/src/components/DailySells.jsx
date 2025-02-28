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
    <div className='daily-best-sells d-flex flex-column w-100 my-4 mb-5 gap-3'>
      <h2 className='daily-best-sells__title fw-semibold'>Daily Best Sells</h2>
      <div className='daily-best-sells__list w-100 d-flex align-items-center justify-content-between gap-3'>
        {loading ? (
          // Skeleton Loader while loading data
          [...Array(4)].map((_, index) => (
            <div className='daily-best-sells__item daily-best-sells__item-skeleton d-flex align-items-center justify-content-center w-100 p-2 rounded' key={index}>
              <div className='daily-best-sells__item-content'>
                <div className='daily-best-sells__item-img-skeleton w-90 rounded'></div>
                <div className='daily-best-sells__item-description-skeleton'>
                  <div className='daily-best-sells__item-title-skeleton'></div>
                  <div className='daily-best-sells__item-desc-skeleton'></div>
                  <div className='daily-best-sells__item-price-rating-skeleton d-flex flex-row justify-content-between'>
                    <div className='daily-best-sells__item-price-rating-rate-skeleton rounded'></div>
                    <div className='daily-best-sells__item-price-rating-rate-skeleton rounded'></div>
                  </div>
                  <div className='daily-best-sells__item-btn-skeleton w-100'></div>
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
                  <img src={item.img} alt={item.title} className='daily-best-sells__item-img-1 rounded-3 object-fit-cover w-100' />
                  <div className='daily-best-sells__item-description position-absolute text-white d-flex flex-column align-items-start gap-2 py-3'>
                    <h3 className='daily-best-sells__item-title fs-4 fw-bold'>{item.title}</h3>
                    <p className='daily-best-sells__item-desc fs-6'>{item.description}</p>
                    <button className='daily-best-sells__item-btn bg-success text-white border-0 rounded cursor-pointer fw-semibold py-2 px-3 fs-6 my-2'>
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
                  <div className='daily-best-sells__item-img-container d-flex align-items-center justify-content-center'>
                    <img src={item.img} alt={item.title} className='daily-best-sells__item-img rounded-3 object-cover w-100 h-75 p-0 h-100' />
                  </div>
                  <div className='daily-best-sells_item-content d-flex flex-column gap-1'>
                    {item.category && <p className='daily-best-sells__item-category text-secondary fw-normal m-0'>{item.category}</p>}
                    <h3 className='daily-best-sells__item-title daily-best-sells__item-title-2 m-0 fw-semibold fs-6'>{item.title}</h3>
                    {item.price && (
                      <div className='daily-best-sells__item-price-rating d-flex flex-row align-items-center justify-content-between p-0 m-0'>
                        <h3 className='daily-best-sells__item-price fs-6'>
                          {item.price} <span className='daily-best-sells__item-original-price text-decoration-line-through fs-6 text-secondary fw-normal'>{item.originalPrice}</span>
                        </h3>
                        <span className='daily-best-sells__item-rating text-warning fs-5'>★★★★★<span className='text-dark fw-normal'>{item.rating}</span></span>
                      </div>
                    )}
                  </div>
                  <button className='daily-best-sells__item-btn bg-success text-white border-0 rounded cursor-pointer fw-semibold py-2 px-3 fs-6 my-2'>{item.buttonText}</button>
                  {item.timer && (
                    <div className='daily-best-sells__item-timer d-flex align-items-center justify-content-between text-center px-2 mb-2'>
                      <div className='daily-best-sells__item-timer-unit'>
                        {item.timer.days} <br /><span className='text-secondary'>Days</span>
                      </div>
                      <div className='daily-best-sells__item-timer-unit'>
                        {item.timer.hours} <br /><span className='text-secondary'>Hours</span>
                      </div>
                      <div className='daily-best-sells__item-timer-unit'>
                        {item.timer.mins} <br /><span className='text-secondary'>Mins</span>
                      </div>
                      <div className='daily-best-sells__item-timer-unit'>
                        {item.timer.secs} <br /><span className='text-secondary'>Secs</span>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className='daily-best-sells__item-options position-absolute flex-row align-items-center justify-content-between rounded gap-2 start-50'>
                <i className="fa-regular fa-eye daily-best-sells__item-option rounded p-2 fs-6"></i>
                <i className="fa-regular fa-heart daily-best-sells__item-option rounded p-2 fs-6"></i>
                <i className="fa-solid fa-arrow-right-arrow-left daily-best-sells__item-option rounded p-2 fs-6"></i>
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
