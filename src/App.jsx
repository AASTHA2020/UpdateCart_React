import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            const updatedItems = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            const newItem = { ...product, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };

    return (
        <div className="App">
            <ProductList addToCart={addToCart} />
            <CartList cartItems={cartItems} />
        </div>
    );
}

export default App;
