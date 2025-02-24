import React, { useState } from 'react'
import { ProgressBar } from "react-bootstrap"
import "../styles2/ProductInfo.css"

const ProductInfo = ({ product }) => {
    const [activeTab, setActiveTab] = useState("Product Details");

    const totalRatings = 11130
    const ratings = [
        { star: 5, percentage: 53 },
        { star: 4, percentage: 22 },
        { star: 3, percentage: 14 },
        { star: 2, percentage: 5 },
        { star: 1, percentage: 7 },
    ]

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    // Function to format the date to "30 December 2022"
    const formatReviewDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    // Function to render the verification status
    const renderVerificationStatus = (isVerified) => {
        return isVerified ? (
            <span style={{ color: '#0AAD0A',fontSize:"13px" }}>Verified Purchase</span>
        ) : (
            <span style={{ color: 'red' }}>Unverified Purchase</span>
        );
    }

    return (
        <div className='product-info'>
            <div className='product-info__tabs'>
                {/* Tab Buttons */}
                <div style={{ display: 'flex', cursor: 'pointer' }} className='product-info__tabs-container my-4 mt-5 border-bottom'>
                    <p
                    className={`product-info__tab ${activeTab === "Product Details" ? 'product-info__tab--active' : ''} fw-normal fs-6`}
                        onClick={() => handleTabClick("Product Details")}
                        style={{ color: activeTab === "Product Details" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Product Details" ? 'underline' : 'none', marginRight: 20 }}
                    >
                        Product Details
                    </p>
                    <p
                    className={`product-info__tab ${activeTab === "Information" ? 'product-info__tab--active' : ''} fw-normal fs-6`}
                        onClick={() => handleTabClick("Information")}
                        style={{ color: activeTab === "Information" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Information" ? 'underline' : 'none', marginRight: 20 }}
                    >
                        Information
                    </p>
                    <p
                    className={`product-info__tab ${activeTab === "Information" ? 'product-info__tab--active' : ''} fw-normal fs-6`}
                        onClick={() => handleTabClick("Reviews")}
                        style={{ color: activeTab === "Reviews" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Reviews" ? 'underline' : 'none', marginRight: 20 }}
                    >
                        Reviews
                    </p>
                    <p
                    className={`product-info__tab ${activeTab === "Information" ? 'product-info__tab--active' : ''} fw-normal fs-6`}
                        onClick={() => handleTabClick("Seller")}
                        style={{ color: activeTab === "Seller" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Seller" ? 'underline' : 'none' }}
                    >
                        Seller Info
                    </p>
                </div>

                {/* Render the active tab's content */}
                {activeTab === "Product Details" && (
                    <div className='product-info__details'>
                        <div className='product-info__section'>
                            <h6 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.productDetails?.heading}</h6>
                            <p className='product-info__section-description fs-6'>{product?.details?.productDetails?.description}</p>
                        </div>
                        <div className='product-info__section'>
                            <h5 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.storageTips?.heading}</h5>
                            <p className="product-info__section-description">{product?.details?.storageTips?.description}</p>
                        </div>
                        <div className='product-info__section'>
                            <h5 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.unit?.heading}</h5>
                            <p className="product-info__section-description">{product?.details?.unit?.description}</p>
                        </div>
                        <div className='product-info__section'>
                            <h5 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.seller?.heading}</h5>
                            <p className="product-info__section-description">{product?.details?.seller?.description}</p>
                        </div>
                        <div className='product-info__section'>
                            <h5 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.disclaimer?.heading}</h5>
                            <p className="product-info__section-description">{product?.details?.disclaimer?.description}</p>
                        </div>
                    </div>
                )}

                {activeTab === "Information" && (
                    <div className='product-info__information'>
                        <h4 className='fw-bold mb-3 product-info__section-title'>Details</h4>
                    <div className='product-info__details-container d-flex justify-content-between'>
                        <div className='product-info__details-left'>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Weight                 <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.weight}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Ingredient Type        <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.ingredientType}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Brand:                 <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.brand}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Item Package Quantity: <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.itemPackageQuantity}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Form:                  <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.form}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Manufacturer:          <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.manufacturer}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Net Quantity:          <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.netQuantity}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Product Dimensions:    <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.productDimensions}</span></p>
</div> 
<div className='product-info__details-right'> 
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>ASIN:                  <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.asin}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Best Sellers Rank:     <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.bestSellerRank}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Date First Available:  <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.dateFirstAvailable}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Item Weight:           <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.itemWeight}</span></p>
    <p className='d-flex align-items-center justify-content-between  product-info__detail-item'>Generic Name:          <span className='product-info__detail-value text-start w-50'>{product?.details?.information?.genericName}</span></p>
</div>
                    </div>
                    </div>
                )}

                {activeTab === "Reviews" && (
                    <div className='product-info__reviews d-flex flex-column flex-md-row justify-content-between'>
                        <div className='product-info__reviews-summary container rounded ms-0 p-0 py-4'>
                            <h5 className='product-info__reviews-title fw-bold'>Customer Reviews</h5>
                            <div className='product-info__reviews-headerd-flex align-items-start justify-content-start gap-2 mt-3 mb-4'>
                                <span className='product-info__rating text-warning'>{product.rating}</span>
                                <span className='product-info__rating-text fs-6'> 4.1 out of 5</span>
                                <span className='product-info__review-count ms-1 text-muted fs-6'>11,130 global ratings</span>
                            </div>
                            {ratings.map((rating, index) => (
                                <div key={index} className='product-info__rating-bar d-flex align-items-center my-2'>
                                    <span className='product-info__star me-2'>{rating.star} ⭐</span>
                                    <ProgressBar now={rating.percentage} variant="warning" className="product-info__progress-bar flex-grow-1" style={{ height: "5px" }} />
                                    <span className='product-info__percentage ms-2 text-muted fs-6'>{rating.percentage} %</span>
                                </div>
                            ))}
                            <div className='mt-5'>
                                <h5 className='fw-bold'>Review this product</h5>
                                <p className='text-muted'>Share your thoughts with other customers.</p>
                                <button className='btn btn-outline-secondary text-muted w-100 fs-6 small'>Write the Review</button>
                            </div>
                        </div>
                        <div className='reviews2 py-3'>
                            <div className='product-info__reviews-list d-flex align-items-center justify-content-between'>
                            <h4 className='product-info__reviews-title fw-bold'>Reviews</h4>
                            <button className='product-info__reviews-btn btn border text-muted fw-bold fs-6'>Top Reviews <i class="fa-solid fa-chevron-down"></i></button>
                            </div>
                            {product?.reviews?.map((review, index) => (
                                <div key={index} className='product-info__review-item d-flex flex-row my-4 w-100'>
                                    <img src={review?.profile} alt="" width="60px" height="60px" className='product-info__review-avatar rounded-circle me-4' />
                                    <div className='product-info__review-content w-100'>
                                        {/* Apply the date formatting function here */}
                                        <p className="product-info__review-header"><strong>{review?.reviewer}</strong> <br /><span className='product-info__review-date fw-light fs-6 me-2 text-muted'> {formatReviewDate(review?.date)} </span> <span className='product-info__review-status fw-bold fs-6'>{renderVerificationStatus(review?.verified)}</span></p>
                                        <h6 className='product-info__review-main-comment fw-bolder'><span className='product-info__rating text-warning me-2'>{product.rating}</span>{review?.mainComment}</h6>
                                        <h6 className='product-info__review-comment text-muted fw-normal fs-6'>{review?.comment}</h6>
                                        <div>
                                            {review?.images?.length > 0 && (
                                                <div className="product-info__review-images">
                                                    {review?.images?.map((image, index) => (
                                                        <img key={index} src={image} alt="review image" width="50px" height="50px" className='product-info__review-image border m-1'/>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className='product-info__review-footer d-flex flex-row align-items-end justify-content-end gap-3 text-muted mt-4 w-100'>
                                            <p className='product-info__review-helpful'><i className="fa-regular fa-thumbs-up"></i> Helpful</p>
                                            <p className='product-info__review-report'><i className="fa-regular fa-flag"></i> Report Abuse</p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                            <button className='product-info__read-more-reviews btn border text-muted fs-6 fw-bold my-4'>Read More Reviews</button>
                            <h5 className='product-info__create-review-title fs-4 fw-bold my-3'>Create Review</h5>
                            <div className='product-info__overall-rating'>
                                <h5>Overall Rating</h5>
                                <span className='fs-4 review_rating'>{product.rating}</span>
                            </div>
                            <hr />
                            <div className='product-info__rate-features'>
                                <h5 >Rate Features</h5>
                                <div className='my-3'><h5 className='fs-6 my-0'>Flavor</h5>
                                <span className='fs-4 review_rating my-0'>{product.rating}</span></div>
                                <div className='my-3'><h5 className='fs-6 my-0'>Value for money</h5>
                                <span className='fs-4 review_rating'>{product.rating}</span></div>
                                <div className='my-3'><h5 className='fs-6 my-0'>Scent</h5>
                                <span className='fs-4 review_rating'>{product.rating}</span></div>
                            </div>
                            <hr />
                            <div className='product-info__headline'>
                                <h5>Add a headline</h5>
                                <input type="text" className='text-control w-100 border py-2 px-3 rounded fs-6' placeholder="What's most important to know" />
                            </div>
                            <hr />
                            <div className='product-info__add-file'>
                                <h5>Add a photo or video</h5>
                                <p className='fs-6 fw-light'>Shoppers find images and videos more helpful than text alone.</p>
                                <input accept="image/*" type='file' multiple className='form-control drop_files' placeholder='Drop files here to upload'/>
                            </div>
                            <hr />
                            <div className='product-info__write-review'>
                                <h5>Add a written review</h5>
                                <textarea name="" id="" placeholder='What did you like or dislike? What did you use this product for?' className='w-100 form-control fs-6'></textarea>
                            </div>
                            <div className='product-info__submit-review d-flex w-100 align-items-end justify-content-end my-4'>
                                <button className='btn submit-btn fw-bold'> Submit Review</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Seller" && (
                    <div className='product-info__seller-info'>
                        <p>{product?.details?.seller?.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductInfo


// import React, { useState } from 'react'
// import { ProgressBar } from "react-bootstrap"
// import { products } from '../assets/data';

// const ProductInfo = ({ product }) => {
//     const [activeTab, setActiveTab] = useState("Product Details");

//     const totalRatings = 11130
//     const ratings = [
//         { star: 5, percentage: 53 },
//         { star: 4, percentage: 22 },
//         { star: 3, percentage: 14 },
//         { star: 2, percentage: 5 },
//         { star: 1, percentage: 7 },
//     ]

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     }

//     // Function to format the date to "30 December 2022"
//     const formatReviewDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString("en-GB", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//         });
//     }

//     // Function to render the verification status
//     const renderVerificationStatus = (isVerified) => {
//         return isVerified ? (
//             <span style={{ color: '#0AAD0A',fontSize:"13px" }}>Verified Purchase</span>
//         ) : (
//             <span style={{ color: 'red' }}>Unverified Purchase</span>
//         );
//     }

//     return (
//         <div>
//             <div >
//                 {/* Tab Buttons */}
//                 <div style={{ display: 'flex', cursor: 'pointer' }} className='TabButtons my-4 mt-5 border-bottom'>
//                     <p
//                     className='fw-normal fs-6'
//                         onClick={() => handleTabClick("Product Details")}
//                         style={{ color: activeTab === "Product Details" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Product Details" ? 'underline' : 'none', marginRight: 20 }}
//                     >
//                         Product Details
//                     </p>
//                     <p
//                     className='fw-normal fs-6'
//                         onClick={() => handleTabClick("Information")}
//                         style={{ color: activeTab === "Information" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Information" ? 'underline' : 'none', marginRight: 20 }}
//                     >
//                         Information
//                     </p>
//                     <p
//                     className='fw-normal fs-6'
//                         onClick={() => handleTabClick("Reviews")}
//                         style={{ color: activeTab === "Reviews" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Reviews" ? 'underline' : 'none', marginRight: 20 }}
//                     >
//                         Reviews
//                     </p>
//                     <p
//                     className='fw-normal fs-6'
//                         onClick={() => handleTabClick("Seller")}
//                         style={{ color: activeTab === "Seller" ? '#0AAD0A' : '#5C6C75',textDecoration: activeTab === "Seller" ? 'underline' : 'none' }}
//                     >
//                         Seller Info
//                     </p>
//                 </div>

//                 {/* Render the active tab's content */}
//                 {activeTab === "Product Details" && (
//                     <div>
//                         <div>
//                             <h6 className='fs-5 fw-bold'>{product?.details?.productDetails?.heading}</h6>
//                             <p className='fs-6'>{product?.details?.productDetails?.description}</p>
//                         </div>
//                         <div>
//                             <h5 className='fs-5 fw-bold'>{product?.details?.storageTips?.heading}</h5>
//                             <p>{product?.details?.storageTips?.description}</p>
//                         </div>
//                         <div>
//                             <h5 className='fs-5 fw-bold'>{product?.details?.unit?.heading}</h5>
//                             <p>{product?.details?.unit?.description}</p>
//                         </div>
//                         <div >
//                             <h5 className='fs-5 fw-bold'>{product?.details?.seller?.heading}</h5>
//                             <p>{product?.details?.seller?.description}</p>
//                         </div>
//                         <div>
//                             <h5 className='fs-5 fw-bold'>{product?.details?.disclaimer?.heading}</h5>
//                             <p>{product?.details?.disclaimer?.description}</p>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === "Information" && (
//                     <div>
//                         <h4 className='fw-bold mb-3'>Details</h4>
//                     <div className='d-flex justify-content-between details-main'>
//                         <div className=''>
//     <p className='d-flex align-items-center justify-content-between '>Weight                 <span className='text-start w-50'>{product?.details?.information?.weight}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Ingredient Type        <span className='text-start w-50'>{product?.details?.information?.ingredientType}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Brand:                 <span className='text-start w-50'>{product?.details?.information?.brand}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Item Package Quantity: <span className='text-start w-50'>{product?.details?.information?.itemPackageQuantity}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Form:                  <span className='text-start w-50'>{product?.details?.information?.form}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Manufacturer:          <span className='text-start w-50'>{product?.details?.information?.manufacturer}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Net Quantity:          <span className='text-start w-50'>{product?.details?.information?.netQuantity}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Product Dimensions:    <span className='text-start w-50'>{product?.details?.information?.productDimensions}</span></p>
// </div> 
// <div className='details-right'> 
//     <p className='d-flex align-items-center justify-content-between '>ASIN:                  <span className='text-start w-50'>{product?.details?.information?.asin}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Best Sellers Rank:     <span className='text-start w-50'>{product?.details?.information?.bestSellerRank}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Date First Available:  <span className='text-start w-50'>{product?.details?.information?.dateFirstAvailable}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Item Weight:           <span className='text-start w-50'>{product?.details?.information?.itemWeight}</span></p>
//     <p className='d-flex align-items-center justify-content-between '>Generic Name:          <span className='text-start w-50'>{product?.details?.information?.genericName}</span></p>
// </div>
//                     </div>
//                     </div>
//                 )}

//                 {activeTab === "Reviews" && (
//                     <div className='reviews d-flex flex-column flex-md-row justify-content-between'>
//                         <div className='reviews1 container rounded ms-0 p-0 py-4'>
//                             <h5 className='fw-bold'>Customer Reviews</h5>
//                             <div className='d-flex align-items-start justify-content-start gap-2 mt-3 mb-4'>
//                                 <span className='text-warning'>{product.rating}</span>
//                                 <span className='fs-6'> 4.1 out of 5</span>
//                                 <span className='ms-1 text-muted fs-6'>11,130 global ratings</span>
//                             </div>
//                             {ratings.map((rating, index) => (
//                                 <div key={index} className='d-flex align-items-center my-2'>
//                                     <span className='me-2'>{rating.star} ⭐</span>
//                                     <ProgressBar now={rating.percentage} variant="warning" className="flex-grow-1" style={{ height: "5px" }} />
//                                     <span className='ms-2 text-muted fs-6'>{rating.percentage} %</span>
//                                 </div>
//                             ))}
//                             <div className='mt-5'>
//                                 <h5 className='fw-bold'>Review this product</h5>
//                                 <p className='text-muted'>Share your thoughts with other customers.</p>
//                                 <button className='btn btn-outline-secondary text-muted w-100 fs-6 small'>Write the Review</button>
//                             </div>
//                         </div>
//                         <div className='reviews2 py-3'>
//                             <div className='d-flex align-items-center justify-content-between'>
//                             <h4 className='fw-bold'>Reviews</h4>
//                             <button className='btn border text-muted fw-bold fs-6'>Top Reviews <i class="fa-solid fa-chevron-down"></i></button>
//                             </div>
//                             {product?.reviews?.map((review, index) => (
//                                 <div key={index} className='d-flex flex-row my-4 w-100'>
//                                     <img src={review?.profile} alt="" width="60px" height="60px" className='rounded-circle me-4' />
//                                     <div className='w-100'>
//                                         {/* Apply the date formatting function here */}
//                                         <p><strong>{review?.reviewer}</strong> <br /><span className='fw-light fs-6 me-2 text-muted'> {formatReviewDate(review?.date)} </span> <span className='fw-bold fs-6'>{renderVerificationStatus(review?.verified)}</span></p>
                                       
//                                         {/* Render the dynamic verification status */}
//                                         <div>
                                            
//                                         </div>
//                                         <h6 className='fw-bolder'><span className='text-warning me-2'>{product.rating}</span>{review?.mainComment}</h6>
//                                         <h6 className='text-muted fw-normal fs-6'>{review?.comment}</h6>
//                                         <div>
//                                             {review?.images?.length > 0 && (
//                                                 <div>
//                                                     {review?.images?.map((image, index) => (
//                                                         <img key={index} src={image} alt="review image" width="50px" height="50px" className='border m-1'/>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className='d-flex flex-row align-items-end justify-content-end gap-3 text-muted mt-4 w-100'>
//                                             <p><i className="fa-regular fa-thumbs-up"></i> Helpful</p>
//                                             <p><i className="fa-regular fa-flag"></i> Report Abuse</p>
//                                         </div>
//                                         <hr />
//                                     </div>
//                                 </div>
//                             ))}
//                             <button className='btn border text-muted ReadMore-btn fs-6 fw-bold my-4'>Read More Reviews</button>
//                             <h5 className='fs-4 fw-bold my-3'>Create Review</h5>
//                             <div>
//                                 <h5>Overall Rating</h5>
//                                 <span className='fs-4 review_rating'>{product.rating}</span>
//                             </div>
//                             <hr />
//                             <div>
//                                 <h5 >Rate Features</h5>
//                                 <div className='my-3'><h5 className='fs-6 my-0'>Flavor</h5>
//                                 <span className='fs-4 review_rating my-0'>{product.rating}</span></div>
//                                 <div className='my-3'><h5 className='fs-6 my-0'>Value for money</h5>
//                                 <span className='fs-4 review_rating'>{product.rating}</span></div>
//                                 <div className='my-3'><h5 className='fs-6 my-0'>Scent</h5>
//                                 <span className='fs-4 review_rating'>{product.rating}</span></div>
//                             </div>
//                             <hr />
//                             <div>
//                                 <h5>Add a headline</h5>
//                                 <input type="text" className='text-control w-100 border py-2 px-3 rounded fs-6' placeholder="What's most important to know" />
//                             </div>
//                             <hr />
//                             <div>
//                                 <h5>Add a photo or video</h5>
//                                 <p className='fs-6 fw-light'>Shoppers find images and videos more helpful than text alone.</p>
//                                 <input accept="image/*" type='file' multiple className='form-control drop_files' placeholder='Drop files here to upload'/>
//                             </div>
//                             <hr />
//                             <div>
//                                 <h5>Add a written review</h5>
//                                 <textarea name="" id="" placeholder='What did you like or dislike? What did you use this product for?' className='w-100 form-control fs-6'></textarea>
//                             </div>
//                             <div className='d-flex w-100 align-items-end justify-content-end my-4'>
//                                 <button className='btn submit-btn fw-bold'> Submit Review</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === "Seller" && (
//                     <div>
//                         <p>{product?.details?.seller?.description}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default ProductInfo
