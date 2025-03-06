import React from 'react';
// import Header from './Components/Header/Header';
// import Banner from './Components/Banner/Banner';
// import Cards from './Components/Cards/Cards';
// import Footer from './Components/Footer/Footer';
// import DemoVideo from './Components/Demovideo';
// import firebase from './firebase/firebase';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './firebase/login';
import Howitsworks from './Components/Header/Howitsworks';
import Pricing from './Components/Header/Pricing';
import Contact from './Components/Header/Contact';
import QRCodeGenerator from './Components/QRscanner/QRScanner';
import FoodTrucking from './Components/Header/FoodTrucking';
import Foodlist from './Components/Header/Foodlist';
import Fooditems from './Components/Header/Fooditems';
import Foodhalls from './Components/Header/Foodhalls';


// // Import images
// import logoImage from './assets/logo.svg';
// import mockupImage from './assets/mockup.svg';
// // import demoVideo from './assets/demo-video.mp4';

function App() {
  return (
      <Router>
      {/* <Toaster /> */}
      <div>
        <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<QRCodeGenerator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/howitsworks" element={<Howitsworks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foodtrucking" element={<FoodTrucking />} />
          <Route path="/foodlist" element={<Foodlist />} />
          <Route path="/fooditems" element={<Fooditems />} />
          <Route path="/foodhalls" element={<Foodhalls />} />
 </Routes>
      </div>
    </Router>
 
)}

export default App;






 