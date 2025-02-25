import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import "../styles2/ProductDetails.css"; 
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import { FiShoppingBag } from "react-icons/fi";
import RelatedItems from './RelatedItems';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => { 
  const {addToCart} = useCart()
  const [product, setProduct] = useState(null); 
  const [mainImage, setMainImage] = useState([]); 
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [count, setCount] = useState(1);

  const api = import.meta.env.VITE_BACKEND;

  useEffect(() => { 
    axios
      .get(`${api}/api/product/${id}`)  
      .then((response) => { 
        setProduct(response.data); 
        if (response.data.image && response.data.image.length > 0) { 
          setMainImage(response.data.image[0]); 
        } 
        setLoading(false); 
      }) 
      .catch((err) => { 
        setError('Failed to fetch product data'); 
        setLoading(false); 
      }); 
  }, []); 

  const handleShareClick = (id) => {
    const shareUrl = `/#/product/${id}`;
    navigator.share({
      title: "Check this out!!!",
      url: shareUrl,
    }).catch((error) => console.error("Error Sharing:", error));
  };

  const zoomImage = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const mouseXPercent = (mouseX / width) * 100;
    const mouseYPercent = (mouseY / height) * 100;

    img.style.transformOrigin = `${mouseXPercent}% ${mouseYPercent}%`;
    img.style.transform = 'scale(1.5)';
  };

  const resetZoom = () => {
    const img = document.querySelector('.product-details__main-image img');
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
  };

  if (loading) { 
    return <div>Loading...</div>; 
  } 

  if (error) { 
    return <div>{error}</div>; 
  }

  return ( 
    <div className='product-details d-flex justify-content-between flex-column w-100'> 
      <p><span className='product-details__breadcrumb text-success'>Home / Shop /</span> {product.name}</p>
      <div className='product-details__main d-flex flex-column flex-md-row'> 
        <div className='product-details__left'> 
          <div className='product-details__main-image' onMouseMove={zoomImage} onMouseLeave={resetZoom}> 
            <img src={mainImage} alt="" /> 
          </div> 
          <div className='product-details__thumbnail-container'> 
            {product.image.map((img, index) => (
              <img 
                src={img} 
                alt="" 
                key={index} 
                className={`product-details__thumbnail ${mainImage === img ? 'product-details__thumbnail--active' : ''}`} 
                onClick={() => setMainImage(img)} 
              /> 
            ))}
          </div> 
        </div> 
        <div className='product-details__right'>
          <p className='product-details__category'>{product.category}</p>
          <h1 className='product-details__name fs-3 fw-bold'>{product.name}</h1>
          <p className='product-details__rating text-warning'>{product.rating} <span className='product-details__reviews text-success'>({product.reviews.length} reviews)</span></p>
          <h4 className='product-details__price fs-4 fw-bold'>
            {product.price} <span className='product-details__original-price text-decoration-line-through text-muted fs-5 fw-normal'>{product.originalPrice}</span>
          </h4>
          <hr />
          <div className='product-details__quantity-lists d-flex my-3'>
            {product.details?.quantity.map((qnty, item) => (
              <p className='product-details__quantity-item border border-secondary rounded m-1 px-3 py-2' key={qnty}>{qnty}</p>
            ))}
          </div>
          <div className='product-details__counter my-4'>
            <button onClick={() => setCount(prev => Math.max(1, prev - 1))} className='product-details__counter-btn btn border'>-</button>
            <span className='product-details__counter-display border px-3 py-2'>{count}</span>
            <button onClick={() => setCount(count + 1)} className='product-details__counter-btn btn border'>+</button>
          </div>
          <div className='product-details__options d-flex gap-2'>
            <button className='product-details__button product-details__button--add-to-cart bg-success text-white border btn spx-4 px-3 py-2 fs-6 fw-bold' onClick={(e)=>{e.stopPropagation();e.preventDefault();addToCart(product,count)}}>
            <FiShoppingBag className='fs-5 fw-bold me-1'/> Add To Cart
            </button>
            <button className='product-details__button btn border text-secondary bg-light'>
              <i className="fa-solid fa-right-left"></i>
            </button>
            <button className='product-details__button btn border text-secondary bg-light'>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          <hr />
          <div className='product-details__info'>
            <p className='product-details__info-item fs-6 text-secondary fw-normal d-flex justify-content-between w-100'>Product Code: <span className='w-50'>{product.details?.productCode}</span></p>
            <p className='product-details__info-item fs-6 text-secondary fw-normal d-flex justify-content-between w-100'>Availability: <span className='w-50'>{product.details?.availability}</span></p>
            <p className='product-details__info-item fs-6 text-secondary fw-normal d-flex justify-content-between w-100'>Type:         <span className='w-50'>{product.details?.type}</span></p>
            <p className='product-details__info-item fs-6 text-secondary fw-normal d-flex justify-content-between w-100'>Shipping:     <span className='w-50'>{product.details?.shipping}</span></p>
          </div>
          <button className='product-details__share-button btn border-secondary px-3 py-2 rounded text-muted' onClick={() => handleShareClick(product._id)}>
            Share <i className="fa-solid fa-share"></i>
          </button>
        </div>
      </div> 
      <ProductInfo product={product} />
      <RelatedItems />
    </div> 
  ); 
};

export default ProductDetail;

// import React, { useState, useEffect } from 'react'; 
// import axios from 'axios'; 
// import "../styles2/ProductDetails.css"; 
// import { Link,useParams,useNavigate } from 'react-router-dom';
// import ProductInfo from './ProductInfo';
// import RelatedItems from './RelatedItems';

// const ProductDetail = () => { 
//   const [product, setProduct] = useState(null); 
//   const [mainImage, setMainImage] = useState([]); 
//   console.log("Product imAGE", mainImage); 
//   const { id } = useParams(); 
//   console.log(id); 
//   console.log("Product", product); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 
//   const [count,setCount] = useState(0)

//   const api = import.meta.env.VITE_BACKEND;

//   useEffect(() => { 
//     // Fetch product data from the backend API 
//     axios
//       .get(`${api}/api/product/${id}`)  // Replace with actual API URL
//       .then((response) => { 
//         setProduct(response.data); 
//         if (response.data.image && response.data.image.length > 0) { 
//           setMainImage(response.data.image[0]); 
//         } 
//         setLoading(false); 
//       }) 
//       .catch((err) => { 
//         setError('Failed to fetch product data'); 
//         setLoading(false); 
//       }); 
//   }, []);  // Adding id to the dependency array to make sure it updates if the URL changes

//   const handleShareClick = (id) =>{
//     const shareUrl = `/#/product/${id}`
//     navigator.share({
//       title:"Check this out!!!",
//       url:shareUrl,
//     }).catch((error)=>console.error("Error Sharing:",error))
//   }

//   const zoomImage = (e)=>{
//     const img = e.target;
//     const {left,top,width,height} = img.getBoundingClientRect()

//     const mouseX = e.clientX - left;
//     const mouseY = e.clientY - top;

//     const mouseXPercent = (mouseX/width)*100
//     const mouseYPercent = (mouseY/height)*100

//     img.style.transformOrigin = `${mouseXPercent}% ${mouseYPercent}%`

//     img.style.transform = 'scale(1.5)'
//   }

//   const resetZoom =()=>{
//     const img = document.querySelector('.main-image img')
//     img.style.transformOrigin = "center center"
//     img.style.transform = "scale(1)"
//   }

//   if (loading) { 
//     return <div>Loading...</div>; 
//   } 

//   if (error) { 
//     return <div>{error}</div>; 
//   }

//   return ( 
//     <div className='product-details d-flex justify-content-between   flex-column w-100'> 
//       <p><span className='text-success'>Home / Shop /</span> {product.name}</p>
//       <div className='product- d-flex flex-column flex-md-row '> 
//         <div className='left'> 
//           <div className='main-image' onMouseMove={zoomImage} onMouseLeave={resetZoom}> 
//             <img src={mainImage} alt="" /> 
//           </div> 
//           <div className='thumbnail-container'> 
//             {product.image.map((img, index) => (
//               <img 
//                 src={img} 
//                 alt="" 
//                 key={index} 
//                 className={mainImage === img ? "active-thumbnail" : ""} 
//                 onClick={() => setMainImage(img)}  // Corrected to wrap in a function
//               /> 
//             ))} 
//           </div> 
//         </div> 
//         <div className='right'>
//         <p className='product-right-category'>{product.category}</p>
//         <h1 className='fs-3 fw-bold'>{product.name}</h1>
//         <p className='text-warning'>{product.rating} <span className='text-success'>({product.reviews.length} reviews)</span></p>
//         <h4 className='fs-4 fw-bold'>{product.price} <span className='text-decoration-line-through text-muted fs-5 fw-normal'>{product.originalPrice}</span></h4>
//         <hr />
//         <div className='quantity-lists d-flex my-3'>
//           {product.details?.quantity.map((qnty,item)=>(
//             <p className='border border-secondary rounded m-1 px-3 py-2 quantity-item'>{qnty}</p>
//           ))}
//         </div>
//         <div className='counter my-4'>
//         <button onClick={()=>setCount(count - 1)} className='btn border'>-</button>
//         <span className='border px-3 py-2'>{count}</span>
//         <button onClick={()=>setCount(count + 1)} className='btn border'>+</button>
//         </div>
//         <div className='product_options d-flex gap-2'>
//           <button className='bg-success text-white border btn px-4 py-2'><i class="fa-solid fa-bag-shopping"></i> Add To Cart</button>
//           <button className='btn border text-secondary bg-light'><i class="fa-solid fa-right-left"></i></button>
//           <button className='btn border text-secondary bg-light'><i class="fa-regular fa-heart"></i></button>
//         </div>
//         <hr />
//         <div className='details'>
//   {/* Directly accessing properties from product.details */}
//     <p className='fs-6 text-secondary fw-normal d-flex justify-content-between w-100 '>Product Code: <span className='w-50'>{product.details?.productCode}</span></p>
//     <p className='fs-6 text-secondary fw-normal d-flex justify-content-between w-100 '>Availability: <span className='w-50'>{product.details?.availability}</span></p>
//     <p className='fs-6 text-secondary fw-normal d-flex justify-content-between w-100 '>Type:         <span className='w-50'>{product.details?.type}</span></p>
//     <p className='fs-6 text-secondary fw-normal d-flex justify-content-between w-100 '>Shipping:     <span className='w-50'>{product.details?.shipping}</span></p>
//         </div>
//         <button className='btn border-secondary px-3 py-2 rounded text-muted' onClick={()=>{handleShareClick(product._id)}}>Share <i class="fa-solid fa-share"></i></button>
//         </div>
//       </div> 
//       <ProductInfo product={product} />
//       <RelatedItems/>
//     </div> 
//   ); 
// };

// export default ProductDetail;
