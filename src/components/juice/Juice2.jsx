import React from "react";

export default function Juice2({ name, description, price, imageUrl }) {
  return (
    <div className="card product-detail mt-3">
      <img
        className="card-img-top product-image"
        src={imageUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="card-text">{description}</p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <div className="buttons">
          <a href="#" className="btn btn-warning">
            <strong>Add to Cart</strong>
          </a>
          <a href="#" className="btn btn-success">
            <strong>Buy</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
