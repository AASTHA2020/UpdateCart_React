import React from "react";
import "./CartList.css";

function CartList({ cartItems }) {
    return (
        <div id="cart">
            <div className="heading">
                <h1>Cart</h1>
            </div>

            {cartItems.length === 0 ? (
                <div id="para">
                    <p>No products added to Cart</p>
                </div>
            ) : (
                <div id="cartItems">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cartItem">
                            <div className="itemDetails">
                                <img src={item.image} alt={item.name} />
                                <div className="itemInfo">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartList;
