import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import "../styles/Cart.css";
 
const Cart = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [cartItems, setCartItems] = useState([]);
 
    console.log(cartItems);
 
    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    console.log("usecart:",useCart())

 
    return (
        <div className={`cart-overlay ${isOpen ? "open" :""}`}>
<div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
<div className='cart-header d-flex justify-content-between align-items-center'>
<h5 className='text-black'>
                    Shop Cart <br />
<span className='text-muted fs-6'>Location in Bengaluru</span>
</h5>
<button className='btn text-muted fw-5' onClick={onClose}>
<i className="fa-solid fa-xmark fs-4"></i>
</button>
</div>
<hr />
            {cartItems.length === 0 ? (
<div className='text-center h-100 w-100  d-flex flex-column align-items-center justify-content-center m-0 p-0'>
<h5 className='text-black fs-4 '>Oops! <br /> <span className='text-muted fs-6 fw-normal'>Your Cart is Empty</span> </h5>
<button className='btn btn-primary bg-success text-white mt-3 fs-6' onClick={onClose}>
                        Shop Now
</button>
</div>
            ) : (
<>
<p className='free-delivery text-left p-2 fs-6 fw-normal'>
                        You've got FREE Delivery. Start <span className='fw-bold'>checkout now!</span>
</p>
<ul className='list-group'>
{cartItems.map((product) => (
<li key={product._id} className='list-group-item d-flex align-items-center justify-content-between flex-row border-0'>
<img src={product.image[0]} alt={product.name} className='cart-img me-3' />
<div className='flex-grow-1 d-flex flex-row align-items-center justify-content-between'>
    <div className='w-50 d-flex align-items-center'>
    <h6 className='m-0 fs-6 fw-bold'>
                                        {product.name} <br /> <span className='text-muted fs-6 fw-normal'>{product.details.quantity[0]}</span> <br />
<button className=' p-0 py-2 fs-6 fw-light btn border-none' onClick={() => removeFromCart(product._id)}>
<i className="fa-regular fa-trash-can text-success"></i> Remove
</button>
</h6>
    </div>
<div className='cart-actions w-50 d-flex align-items-center justify-content-between'>
    <div>
    <input className='button-minus btn btn-sm border' type='button' 
                                               onClick={() =>decrementQuantity(product._id)} value="-" />
<span className='btn border px-2 py-1'>{product.quantity}</span>
<input className='button-plus btn btn-sm border ' type="button" 
                                               onClick={() =>incrementQuantity(product._id)} value="+" />
    </div>
    <div>
    <p className='text-end fw-bold m-0'>
    ${((parseFloat(product.price.replace("$", "")) || 0) * product.quantity).toFixed(2)}
</p>
    </div>
</div>

</div>
</li>
                        ))}
</ul>
<div className='cart-footer py-3 d-flex align-items-center justify-content-between'>
<button className='btn bg-success text-white p-2 px-3' onClick={onClose}>Continue Shopping</button>
<button className='btn btn-dark mt-2 p-2 px-3' onClick={onClose}>Proceed To Checkout</button>
</div>
</>
            )}
</div>
</div>
    );
};
 
export default Cart;