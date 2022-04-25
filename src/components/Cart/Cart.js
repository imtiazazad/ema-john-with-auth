import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2)); 
    // const tax = total * 10 / 100; 
    const grantTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>select Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: {grantTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;