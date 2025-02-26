import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

const RatingBar = ({ index, rating }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 1 second before showing the actual data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div key={index} className='product-info__rating-bar d-flex align-items-center my-2'>
      {loading ? (
        // Skeleton loader for the rating bar
        <div className="skeleton-rating-bar">
          <div className="skeleton-star"></div>
          <div className="skeleton-progress-bar"></div>
          <div className="skeleton-percentage"></div>
        </div>
      ) : (
        // Actual content when loading is complete
        <>
          <span className='product-info__star me-2'>{rating.star} ⭐</span>
          <ProgressBar now={rating.percentage} variant="warning" className="product-info__progress-bar flex-grow-1" style={{ height: "5px" }} />
          <span className='product-info__percentage ms-2 text-muted fs-6'>{rating.percentage} %</span>
        </>
      )}
    </div>
  );
};

export default RatingBar;
