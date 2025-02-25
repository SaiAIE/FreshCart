import { createContext, useContext, useState, useEffect } from "react";
 
const CartContext = createContext();
 
export const useCart = () => {
    return useContext(CartContext);
};
 
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
 
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);
 
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]); // Update localStorage when cart changes
 
    const addToCart = (product,quantity=1) => {
        if (!product || !product._id) {
            console.error("Invalid product:", product);
            return;
        }
 
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id);
 
            if (existingProduct) {
                return prevCart.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
        alert(`${product.name} added to cart!`);
    };
 
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };
 
    const incrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
 
    const decrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item._id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove product if quantity is 0
        );
    };
 
    return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
</CartContext.Provider>
    );
};