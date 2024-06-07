import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PrdoductCard from "./components/Product";
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

  function deccreaseQuantity(index) {
    let temp = [...products];
    if (temp[index].quantity > 1) {
      temp[index].quantity -= 1;
      setProducts(temp);
    } else {
      removeProduction(index);
    }
  }

  function removeProduction(index) {
    let temp = products.filter((item, idx) => {
      if (idx != index) return item;
    });

    setProducts(temp);
  }

  useEffect(() => {
    let sum = 0;
    products.forEach((item, index) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [products]);

  return (
    <div>
      <Navbar />

      {products.length > 0 ? (
        <div>
          {products.map((item, index) => {
            return (
              <PrdoductCard
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                quant={item.quantity}
                inc={increaseQuantity}
                dec={deccreaseQuantity}
                index={index}
                rm={removeProduction}
              />
            );
          })}

          <h3>Total Price: {total}</h3>
          <button onClick={() => setProducts([])}>Clear Cart</button>
        </div>
      ) : (
        <p>There is no item in your bag</p>
      )}
    </div>
  );
}

export default App;