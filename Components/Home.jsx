import React from 'react'
import Header from './Header/Header';
// import Banner from './Components/Banner';
import Banner from './Banner/Banner'
import Cards from './Cards/Cards';
import Footer from './Footer/Footer'
import DemoVideo from './Demovideo';
// Import images
// import logoImage from '../assets/logo.svg';
import mockupImage from '../assets/mockup.svg';
// import LoginPage from '../firebase/login';
// import demoVideo from './assets/demo-video.mp4';

export default function Home() {
  return (
    <div>
      {/* <LoginPage/> */}
       <Header />
<Banner mockupSrc={mockupImage} />
<div className="container">
  <section className="features-section">
    <h2 className="section-title">Why Choose Our Solution?</h2>
    <Cards />
  </section>

  <section className="video-demo-section">
    <h2 className="section-title">See How It Works</h2>
    <div className="video-container">
      <video controls className="demo-video">
        <DemoVideo/>
          {/* <source src={demo Video} type="video/mp4" />   */}
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="video-description">
      <h3>Simple, Fast & Contactless Ordering</h3>
      <p>
        Watch how customers can easily scan QR codes, browse the menu, place orders, and pay 
        without any physical contact or waiting for staff. Our solution streamlines the entire 
        dining experience from start to finish.
      </p>
      <button className="btn-primary">Get Started Today</button>
    </div>
  </section>
</div>
<Footer />
</div>
);
} 



