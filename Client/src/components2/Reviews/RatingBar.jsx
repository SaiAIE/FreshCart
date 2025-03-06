import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

const RatingBar = ({ index, rating,loading }) => {

  return (
    <div key={index} className='product-info__rating-bar d-flex align-items-center my-2'>
      {loading ? (
        
        <div className="loader">
        </div>
      ) : (
        
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
