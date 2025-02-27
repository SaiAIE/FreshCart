import React from 'react';
import "../../styles2/Reviews.css"

const ReviewItem = ({ index, review, product }) => {

  // Function to format the date to "30 December 2022"
  const formatReviewDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Function to render the verification status
  const renderVerificationStatus = (isVerified) => {
    return isVerified ? (
      <span style={{ color: '#0AAD0A', fontSize: "13px" }}>Verified Purchase</span>
    ) : (
      <span style={{ color: 'red' }}>Unverified Purchase</span>
    );
  };

  return (
    <div key={index} className="product-info__review-item d-flex flex-row my-4 w-100">
      {/* Actual content without the loading state */}
      <div className='product-info__review-item d-flex flex-row my-4 w-100'>
        <img
          src={review?.profile}
          alt=""
          width="60px"
          height="60px"
          className="product-info__review-avatar rounded-circle me-4"
        />
        <div className="product-info__review-content w-100">
          <p className="product-info__review-header">
            <strong>{review?.reviewer}</strong>{" "}
            <br />
            <span className="product-info__review-date fw-light fs-6 me-2 text-muted">
              {formatReviewDate(review?.date)}
            </span>{" "}
            <span className="product-info__review-status fw-bold fs-6">
              {renderVerificationStatus(review?.verified)}
            </span>
          </p>
          <h6 className="product-info__review-main-comment fw-bolder">
            <span className="product-info__rating text-warning me-2">
              {product.rating}
            </span>
            {review?.mainComment}
          </h6>
          <h6 className="product-info__review-comment text-muted fw-normal fs-6">
            {review?.comment}
          </h6>
          <div>
            {review?.images?.length > 0 && (
              <div className="product-info__review-images">
                {review?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="review image"
                    width="50px"
                    height="50px"
                    className="product-info__review-image border m-1"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="product-info__review-footer d-flex flex-row align-items-end justify-content-end gap-3 text-muted mt-4 w-100">
            <p className="product-info__review-helpful">
              <i className="fa-regular fa-thumbs-up"></i> Helpful
            </p>
            <p className="product-info__review-report">
              <i className="fa-regular fa-flag"></i> Report Abuse
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;


export const SkeletonReviewItem = () => (
    <div className="product-info__review-item skeleton-review-item">
        <img
            className="product-info__review-avatar rounded-circle me-4 skeleton-review-avatar"
            width="60px"
            height="60px"
        />
        <div className="product-info__review-content w-100 skeleton-review-content">
            <div className="product-info__review-header skeleton-review-header">
                <div className="skeleton-reviewer-name w-50 "></div>
                <div className="product-info__review-date fw-light fs-6 me-2 text-muted skeleton-review-date w-25 "></div>
                <div className="product-info__review-status fw-bold fs-6 skeleton-review-status w-25 "></div>
            </div>
            <div className="product-info__review-main-comment fw-bolder skeleton-review-comment"></div>
            <div className="product-info__review-main-comment fw-bolder skeleton-review-comment"></div>
            <div className="product-info__review-images skeleton-review-images">
                <img
                    className="product-info__review-image border m-1 skeleton-review-image"
                    width="50px"
                    height="50px"
                />
                <img
                    className="product-info__review-image border m-1 skeleton-review-image"
                    width="50px"
                    height="50px"
                />
                <img
                    className="product-info__review-image border m-1 skeleton-review-image"
                    width="50px"
                    height="50px"
                />
            </div>
            <div className="product-info__review-footer d-flex flex-row align-items-end justify-content-end gap-3 text-muted mt-4 w-100 skeleton-review-footer">
                <div className="product-info__review-helpful skeleton-footer-action"></div>
                <div className="product-info__review-report skeleton-footer-action"></div>
            </div>
        <hr />
        </div>
    </div>
);