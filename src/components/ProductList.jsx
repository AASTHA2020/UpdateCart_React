import React, { useState } from "react";
import "./ProductList.css";

function ProductList({ addToCart, cartItems }) {
    // State to manage products with initial data
    const [products, setProducts] = useState([
        { id: 1, name: "Sylvester Tshirt", price: 100, image: "https://source.unsplash.com/random/400x300/?tshirt", quantity: 0 },
        { id: 2, name: "Harry Potter Leviosa", price: 200, image: "https://source.unsplash.com/random/400x300/?shoes", quantity: 0 },
        { id: 3, name: "Harry Potter Hogwarts", price: 300, image: "https://source.unsplash.com/random/400x300/?books", quantity: 0 }
    ]);

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
        const updatedProducts = products.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        setProducts(updatedProducts);
        addToCart(product); // Call parent function to add to cart
    };

    // Function to handle removing a product from the cart
    const handleRemoveFromCart = (product) => {
        const updatedProducts = products.map(p =>
            p.id === product.id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
        );
        setProducts(updatedProducts);
    };

    // Check if a product is already in the cart
    const isInCart = (productId) => {
        return cartItems && cartItems.some(item => item.id === productId);
    };

    return (
        <div id="product-list">
            <div className="heading">
                <h1>Products</h1>
            </div>

            {products.map(product => (
                <div className="product" key={product.id}>
                    <div className="text">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="number">
                        <p>${product.price}</p>
                    </div>

                    <div className="buttons">
                        <div className="buttonContainer">
                            {/* Conditional rendering for Add to Cart or Remove from Cart button */}
                            {isInCart(product.id) ? (
                                <button className="removeFromCartButton" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
                            ) : (
                                <button className="addToCartButton" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            )}
                        </div>

                        {/* Display quantity only if the product is in the cart */}
                        {isInCart(product.id) && (
                            <div className="noOfProducts">
                                <p>{product.quantity}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
