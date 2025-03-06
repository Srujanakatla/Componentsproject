import React, { useEffect, useState } from 'react';
// import './FoodTracking.css';
import './FoodTrucking.css'
// import pizza from './images/pizza.jpg';
import burger from '../../../public/Image/10.png';
// import pasta from './images/pasta.jpg';

export default function FoodTracking() {
  const [orderStatus, setOrderStatus] = useState('Order Confirmed');
  const [eta, setEta] = useState(30);
  const [location, setLocation] = useState('Restaurant');
  const [progress, setProgress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalCost, setTotalCost] = useState(299);
  const [tip, setTip] = useState(0);

  useEffect(() => {
    const trackingUpdates = setInterval(() => {
      setEta((prevEta) => (prevEta > 0 ? prevEta - 5 : 0));
      setProgress((prev) => (prev < 100 ? prev + 25 : 100));
      if (eta <= 25) setLocation('On the way');
      if (eta <= 10) setLocation('Near your location');
      if (eta === 0) setOrderStatus('Delivered');
    }, 5000);

    return () => clearInterval(trackingUpdates);
  }, [eta]);

  return (
    <div className="food-container">
      <h1 className="title">Food Order Tracking</h1>
      <p><strong>Status:</strong> {orderStatus}</p>
      <p><strong>ETA:</strong> {eta} mins</p>
      <p><strong>Current Location:</strong> {location}</p>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <h2>Ordered Food</h2>
      <div className="food-items">
        {/* <img src={pizza} alt="Pizza" className="food-image" /> */}
        <img src={burger} alt="Burger" className="food-image" />
        {/* <img src={pasta} alt="Pasta" className="food-image" /> */}
      </div>

      <h2>Payment Options</h2>
      <button className="pay-btn" onClick={() => setPaymentMethod('GPay')}>Pay with GPay</button>
      <button className="pay-btn" onClick={() => setPaymentMethod('PhonePe')}>Pay with PhonePe</button>
      <button className="pay-btn" onClick={() => setPaymentMethod('Credit Card')}>Pay with Credit Card</button>
      <p><strong>Payment Method:</strong> {paymentMethod}</p>

      <h2>Total Cost: ₹{totalCost}</h2>
      <h2>Tip: ₹{tip}</h2>
      <input type="number" placeholder="Add Tip" onChange={(e) => setTip(Number(e.target.value))} />
    </div>
  );
}
