import React from "react";
import './Product.css'; // Make sure to import the CSS file for ProductCard styling

export default function ProductCard({
  img,
  title,
  price,
  quant,
  inc,
  dec,
  index,
  rm,
}) {
  return (
    <div className="product-card">
      <img className="product-img" src={img} alt={title} />
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
        <button className="remove-button" onClick={() => rm(index)}>Remove</button>
      </div>
      <div className="quantity-controls">
        <button className="quantity-button" onClick={() => inc(index)}>+</button>
        <p className="product-quantity">{quant}</p>
        <button className="quantity-button" onClick={() => dec(index)}>-</button>
      </div>
    </div>
  );
}
