import React from 'react'

const CreateReview = ({product}) => {
    return (
        <div>
            <h5 className='product-info__create-review-title fs-4 fw-bold my-3'>Create Review</h5>
            <div className='product-info__overall-rating'>
                <h5>Overall Rating</h5>
                <span className='fs-4 review_rating'>{product?.rating}</span>
            </div>
            <hr />
            <div className='product-info__rate-features'>
                <h5 >Rate Features</h5>
                <div className='my-3'><h5 className='fs-6 my-0'>Flavor</h5>
                    <span className='fs-4 review_rating my-0'>{product?.rating}</span></div>
                <div className='my-3'><h5 className='fs-6 my-0'>Value for money</h5>
                    <span className='fs-4 review_rating'>{product?.rating}</span></div>
                <div className='my-3'><h5 className='fs-6 my-0'>Scent</h5>
                    <span className='fs-4 review_rating'>{product?.rating}</span></div>
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
                <input accept="image/*" type='file' multiple className='form-control drop_files' placeholder='Drop files here to upload' />
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
    )
}

export default CreateReview
