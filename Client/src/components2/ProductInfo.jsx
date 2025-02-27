import React, { useState } from 'react'
import "../styles2/ProductInfo.css"
import RatingBar from './Reviews/RatingBar';
import ReviewItem from './Reviews/ReviewItem';
import CreateReview from './Reviews/CreateReview';
import "../styles2/Reviews.css"
import { SkeletonReviewItem } from './Reviews/ReviewItem';

const ProductInfo = ({ product, loading }) => {
    const [activeTab, setActiveTab] = useState("Product Details");

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

    return (
        <div className='product-info'>
            <div className='product-info__tabs'>
                {/* Tab Buttons */}
                <div style={{ display: 'flex', cursor: 'pointer' }} className='product-info__tabs-container my-4 mt-5 border-bottom'>
                    {["Product Details", "Information", "Reviews", "Seller"].map((tab, index) => (
                        <p
                            key={index}
                            className={`product-info__tab ${activeTab === "Product Details" ? 'product-info__tab--active' : ''} fw-normal fs-6`}
                            onClick={() => handleTabClick(tab)}
                            style={{ color: activeTab === tab ? '#0AAD0A' : '#5C6C75', textDecoration: activeTab === tab ? 'underline' : 'none', marginRight: 20 }}
                        >
                            {tab}
                        </p>
                    ))}
                </div>

                {/* Render the active tab's content */}
                {activeTab === "Product Details" && (
                    <div className='product-info__details w-100'>
                        {["productDetails", "storageTips", "unit", "seller", "disclaimer"].map((key) => (
                            <div className='product-info__section w-100' key={key}>
                                {loading ? (
                                    <div className='product-info__skeleton-container'>
                                        <h5 className='product-info__section-heading-skeleton'></h5>
                                        <p className='product-info__section-description-skeleton'></p>
                                    </div>
                                ) : (
                                    <div>
                                        <h5 className='product-info__section-heading fs-5 fw-bold'>{product?.details?.[key]?.heading}</h5>
                                        <p className='product-info__section-description fs-6'>{product?.details?.[key]?.description}</p>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Information" && (
                    <div className='product-info__information'>
                        <h4 className='fw-bold mb-3 product-info__section-title'>Details</h4>
                        <div className='product-info__details-container d-flex justify-content-between'>
                            <div className='product-info__details-left'>
                                {[
                                    { label: "Weight", key: "weight" },
                                    { label: "Ingredient Type", key: "ingredientType" },
                                    { label: "Brand", key: "brand" },
                                    { label: "Item Package Quantity", key: "itemPackageQuantity" },
                                    { label: "Form", key: "form" },
                                    { label: "Manufacturer", key: "manufacturer" },
                                    { label: "NetQuantity", key: "netQuantity" },
                                    { label: "Product Dimensions", key: "productDimensions" }
                                ].map(({ label, key }) => (
                                    <p key={key} className='d-flex align-items-center justify-content-between product-info__detail-item'>
                                        {loading ? (
                                            <span className='product-info__detail-item skeleton-label w-100'></span>
                                        ) : (label)}
                                        <span className='product-info__detail-value text-start w-50'>{loading ? (<span className='product-info__detail-value skeleton-value w-100'></span>) : (product?.details?.information?.[key])}</span>
                                    </p>
                                ))}
                            </div>
                            <div className='product-info__details-right'>
                                {[
                                    { label: "ASIN", key: "asin" },
                                    { label: "Best Sellers Rank", key: "bestSellerRank" },
                                    { label: "Date First Available", key: "dateFirstAvailable" },
                                    { label: "Item Weight", key: "itemWeight" },
                                    { label: "Generic Name", key: "genericName" }
                                ].map(({ label, key }) => (
                                    <p key={key} className='d-flex align-items-center justify-content-between product-info__detail-item'>
                                        {loading ? (
                                            <span className='product-info__detail-item skeleton-label w-100'></span>
                                        ) : (label)}
                                        <span className='product-info__detail-value text-start w-50'>{loading ? (<span className='product-info__detail-value skeleton-value w-100'></span>) : (product?.details?.information?.[key])}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Reviews" && (
                    <div className='product-info__reviews d-flex flex-column flex-md-row justify-content-between'>
                        <div className='product-info__reviews-summary container rounded ms-0 p-0 py-4'>
                            <h5 className='product-info__reviews-title fw-bold'>Customer Reviews</h5>
                            <div className='product-info__reviews-headerd-flex align-items-start justify-content-start gap-2 mt-3 mb-4'>
                                <span className='product-info__rating text-warning'>{product?.rating}</span>
                                <span className='product-info__rating-text fs-6'> 4.1 out of 5</span>
                                <span className='product-info__review-count ms-1 text-muted fs-6'>11,130 global ratings</span>
                            </div>
                            {ratings?.map((rating, index) => (
                                <RatingBar key={index} rating={rating} />
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
                            {loading ? (
                                <>
                                    {[...Array(5)].map((_, index) => (
                                        <SkeletonReviewItem key={index} />
                                    ))}
                                </>
                            ) : (
                                product?.reviews?.map((review, index) => (
                                    <ReviewItem key={index} review={review} product={product} loading={loading} />
                                ))
                            )}
                            <button className='product-info__read-more-reviews btn border text-muted fs-6 fw-bold my-4'>Read More Reviews</button>
                            <CreateReview product={product} />
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