import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/Product"; // Fixed the typo in the import statement
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      img: "https://www.course-api.com/images/cart/phone-1.png",
      title: "Samsung Galaxy S8",
      price: 399.99,
      quantity: 1,
    },
    {
      img: "https://www.course-api.com/images/cart/phone-2.png",
      title: "Google Pixel",
      price: 499.99,
      quantity: 1,
    },
    {
      img: "https://www.course-api.com/images/cart/phone-3.png",
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      quantity: 1,
    },
    {
      img: "https://www.course-api.com/images/cart/phone-4.png",
      title: "Samsung Galaxy S7",
      price: 599.99,
      quantity: 1,
    },
  ]);

  const [total, setTotal] = useState(0);

  function increaseQuantity(index) {
    let temp = [...products];        
    temp[index].quantity += 1;       
    setProducts(temp);              
  }

  function decreaseQuantity(index) {
    let temp = [...products];    
    if (temp[index].quantity > 1) {
      temp[index].quantity -= 1;     
      setProducts(temp);             
    } else {
      removeProduction(index);      
    }
  }

  function removeProduction(index) {
    let temp = products.filter((item, idx) => idx !== index);
    setProducts(temp);
  }

  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum += item.price * item.quantity;      
    });
    setTotal(sum);          
  }, [products]);

  return (
    <div className="app-container">
      <Navbar />

      {products.length > 0 ? (        
        <div className="products-container">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              quant={item.quantity}
              inc={increaseQuantity}
              dec={decreaseQuantity}
              index={index}
              rm={removeProduction}
            />
          ))}

          <h3 className="total-price">Total Price: ${total}</h3>
          <button className="clear-cart-button" onClick={() => setProducts([])}>Clear Cart</button>
        </div>
      ) : (
        <p className="empty-cart-message">There is no item in your bag</p>
      )}
    </div>
  );
}

export default App;
