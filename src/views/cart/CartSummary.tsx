import React, { useEffect, useState } from 'react';
import OrderReview from './OrderReview.tsx';
import Checkout from './Checkout';
import CartView from './Cart';
import CartService from '../../utils/CartService.ts';
import { useProductSeletor } from '../../hooks/useProductSelector.ts';

const CartSummary: React.FC = () => {
    const { products } = useProductSeletor();
    const showCheckout = true; // Change this condition based on your logic

    const onSubmitApplyCouponCode = async (values) => {
        alert(JSON.stringify(values));
    };
    const [cart, setCart] = useState(null);
    //   const [show, setShow] = useState(false);

    useEffect(() => {
        // Fetch cart data from API
        const fetchCart = async () => {
            const response = await CartService.fetchCart();
            if (response) {
                setCart(response);
            }
        };
        fetchCart();
    }, []);

    //   const handleShow = () => setShow(true);
    //   const handleClose = () => setShow(false);


    const updateQuantity = async (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        const updatedCartItem = await CartService.updateCartItem(itemId, newQuantity, cart?.userId);
        if (updatedCartItem) {
            setCart((prevCart) => ({
                ...prevCart,
                cartItems: prevCart.cartItems.map((item) =>
                    item.id === itemId ? updatedCartItem : item
                ),
            }))
        }
    };

    const removeCartItem = async (itemId) => {
        const updatedCart = await CartService.cleartCartItembyId(cart.userId, itemId);
        if (updatedCart) {
            setCart(updatedCart);
        }
    }

    const totalPrice = () => {
        if (!cart || !cart.cartItems) return 0;

        const total = cart.cartItems.reduce((total, item) => {
            return total + item.quantity * item.price;
        }, 0);

        return total.toFixed(2); // Format to 2 decimal places
    };
    return (
        <>
            <div className="border-top p-4 text-black mb-3">
                <h1 className="display-6">Shopping Cart</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {showCheckout ? <Checkout  cart={cart} /> : 
                        <CartView cart={cart} updateQuantity={updateQuantity} removeCartItem={removeCartItem} products={products} />}
                    </div>
                    <div className='col-md-3'>
                        {/* <OrderReview cart = {cart} totalPrice = {totalPrice}/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSummary;
