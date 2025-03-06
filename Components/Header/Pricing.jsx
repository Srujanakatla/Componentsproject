import React, { useState } from "react";
import './Pricing.css'
import Header from "./Header";

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: 200, rating: 4.5, image: "/public/Image/pizza.jpg" },
  { id: 2, name: "Cheese Burger", price: 150, rating: 4.2, image: "/public/Image/burger.png" },
  { id: 3, name: "Pasta Alfredo", price: 300, rating: 4.8, image: "/public/Image/pasta.jpg" },
  { id: 4, name: "Sushi Rolls", price: 1200, rating: 5.0, image: "/public/Image/avocado.jpg" },
  { id: 5, name: "Tandoori Chicken", price: 500, rating: 4.6, image: "/public/Image/chkn.png" },
  { id: 6, name: "Chocolate Cake", price: 250, rating: 4.9, image: "/public/Image/Chocolate-Cake.png" },
  { id: 2, name: "fish curry", price: 300, rating: 4.7, image: "/public/Image/fish.png" },
  { id: 3, name: "chicken", price: 200, rating: 4.6, image: "/public/Image/chicken-biryani.jpg" },
  { id: 4, name: "Paneer", price: 180, rating: 4.5, image: "/public/Image/paneer.jpg" },
  { id: 5, name: "Sushi Platter", price: 400, rating: 4.8, image: "/public/Image/foodrolls.jpg" }
];

export default function Pricing() {
  const [items, setItems] = useState(foodItems);
  const [cart, setCart] = useState({});
  const [sortOrder, setSortOrder] = useState(""); 

  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const removeFromCart = (id) => {
    if (cart[id] > 0) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };

  const sortItems = (order) => {
    let sortedItems = [...items];
    if (order === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setSortOrder(order);
    setItems(sortedItems);
  };

  return (
    <div className="pricing-container">
        <Header/>
      {/* Navbar */}
      <header className="navbar">
        <h1>Food Pricing</h1>
        <button onClick={() => sortItems("lowToHigh")}>Sort: Low to High</button>
        <button onClick={() => sortItems("highToLow")}>Sort: High to Low</button>
      </header>

      {/* Banner */}
      <section className="banner">
        <h1>Best Food at Affordable Prices</h1>
        <p>Find the best meals suited for you</p>
      </section>

      {/* Food Grid */}
      <section className="food-grid">
        {items.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>⭐ {item.rating}</p>
            <div className="cart-buttons">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{cart[item.id] || 0}</span>
              <button onClick={() => addToCart(item.id)}>+</button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Food Ordering App. All rights reserved.</p>
      </footer>
    </div>
  );
}
