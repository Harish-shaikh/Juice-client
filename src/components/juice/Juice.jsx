import React from "react";
import Juice2 from "./Juice2"; // Assuming Juice2 is in the same directory

export default function Juice() {
  const products = [
    {
      id: 1,
      name: "Mango",
      description: "Description for Product 1",
      price: "20",
      imageUrl: "./images/apple.jfif",
    },
    {
      id: 2,
      name: "Banana",
      description: "Description for Product 1",
      price: "20",
      imageUrl: "./images/apple.jfif",
    },
    {
      id: 3,
      name: "Apple",
      description: "Description for Product 1",
      price: "20",
      imageUrl: "./images/pineapple.jfif",
    },
    {
      id: 4,
      name: "Pineapple",
      description: "Description for Product 1",
      price: "$19.99",
      imageUrl: "./images/banana.jfif",
    },
  ];

  return (
    <div className="aboutus text-center mt-5">
      <h2>Juices</h2>
      <div className="aboutus-detail">
        <div
          className="products-container container"
          style={{ display: "flex" }}
        >
          {products.map((product) => (
            <div key={product.id} style={{ marginLeft: "3rem" }}>
              <Juice2
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                key={product.id} // Use a unique identifier as the key
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
